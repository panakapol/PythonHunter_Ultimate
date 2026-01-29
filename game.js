/* =========================================
   PART 1: MATRIX VISUALS
   ========================================= */
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas); resizeCanvas();
const rainDrops = Array.from({ length: 50 }).fill(1);
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0'; ctx.font = '15px monospace';
    for (let i = 0; i < rainDrops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * 20, rainDrops[i] * 20);
        if (rainDrops[i] * 20 > canvas.height && Math.random() > 0.975) rainDrops[i] = 0;
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 50);

/* =========================================
   PART 2: AUDIO SYSTEM
   ========================================= */
class SoundSys {
    constructor() { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); this.muted = false; }
    playTone(freq, type, duration) {
        if (this.muted) return; if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain();
        osc.type = type; osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + duration);
    }
    playStart() { this.playTone(400, 'square', 0.1); }
    playCorrect() { this.playTone(800, 'sine', 0.1); }
    playWrong() { this.playTone(150, 'sawtooth', 0.2); }
    playWin() { [400, 600, 800].forEach((f, i) => setTimeout(() => this.playTone(f, 'square', 0.2), i*150)); }
    playBonus() { [600, 800, 1200].forEach((f, i) => setTimeout(() => this.playTone(f, 'sine', 0.1), i*100)); }
}

/* =========================================
   PART 3: GAME ENGINE (UPDATED)
   ========================================= */
class GameEngine {
    constructor() {
        this.playerName = "PLAYER";
        this.currentMode = "SURVIVAL";
        this.selectedTime = 60;
        this.winScore = 800;
        this.score = 0; this.hp = 100; this.timer = 60;
        this.consecutiveWins = 0; // ตัวนับตอบถูกติดกัน
        this.questionPool = []; 
        this.sessionHistory = [];
        this.sound = new SoundSys();
        this.leaderboard = JSON.parse(localStorage.getItem('pythonHunter_lb')) || [];

        this.ui = {
            scenes: { menu: document.getElementById('menu-scene'), mission: document.getElementById('mission-select-scene'), game: document.getElementById('game-scene'), over: document.getElementById('gameover-scene'), leaderboard: document.getElementById('leaderboard-scene'), archive: document.getElementById('archive-scene') },
            input: document.getElementById('player-input'), code: document.getElementById('code-display'), qText: document.getElementById('question-text-display'), score: document.getElementById('score-display'), timer: document.getElementById('timer-display'), hpBar: document.getElementById('player-hp-bar'),
            monster: document.getElementById('monster-sprite'), damageText: document.getElementById('damage-text'), comboDisplay: document.getElementById('combo-display'),
            finalName: document.getElementById('final-name'), finalScore: document.getElementById('final-score'), finalMode: document.getElementById('final-mode'), reviewBox: document.getElementById('review-box'), endTitle: document.getElementById('end-title')
        };

        this.updateLeaderboardDisplay();
        document.getElementById('player-input').addEventListener('keydown', (e) => { if(e.key==='Enter') this.checkAnswer(); });
        document.getElementById('attack-btn').addEventListener('click', () => this.checkAnswer());
        document.getElementById('sound-toggle').addEventListener('click', (e) => { this.sound.muted = !this.sound.muted; e.target.innerText = this.sound.muted ? "🔇 OFF" : "🔊 ON"; });
    }

    setTime(s) {
        this.selectedTime = s;
        this.sound.playStart();
        document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
        [...document.querySelectorAll('.time-btn')].find(b => b.innerText.includes(s)).classList.add('active');
        
        // --- NEW WIN CONDITIONS ---
        if(s === 60) this.winScore = 800;       // 60s -> 800 pts
        else if(s === 120) this.winScore = 1500; // 120s -> 1500 pts
        else if(s === 180) this.winScore = 2000; // 180s -> 2000 pts
    }

    goToMissionSelect() {
        if(!document.getElementById('player-name-input').value.trim()) { alert("ใส่ชื่อก่อนครับ!"); return; }
        this.playerName = document.getElementById('player-name-input').value.trim().toUpperCase();
        this.switchScene('mission');
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    startMission(mode) {
        this.currentMode = mode;
        this.switchScene('game');
        this.score = 0; this.hp = 100; this.timer = this.selectedTime;
        this.consecutiveWins = 0;
        this.sessionHistory = [];
        
        // --- SURVIVAL LOGIC (Level 4 & 5 Only) ---
        let rawQuestions = [];
        if (mode === 'SURVIVAL') {
            rawQuestions = QUESTION_DATABASE.filter(q => q.level >= 4);
        } else {
            rawQuestions = QUESTION_DATABASE.filter(q => q.mode === mode);
        }
        if(rawQuestions.length === 0) rawQuestions = QUESTION_DATABASE;
        
        this.questionPool = this.shuffleArray([...rawQuestions]); 

        this.ui.score.innerText = "0"; this.ui.timer.innerText = this.timer; this.ui.hpBar.style.width = "100%";
        document.getElementById('current-player-display').innerText = this.playerName;
        document.getElementById('mode-display').innerText = mode;
        this.ui.comboDisplay.innerText = "";
        
        this.isPlaying = true;
        this.nextTurn();
        this.startTimer();
        setTimeout(() => this.ui.input.focus(), 500);
    }

    nextTurn() {
        if(this.questionPool.length === 0) {
            let rawQuestions = (this.currentMode === 'SURVIVAL') ? QUESTION_DATABASE.filter(q => q.level >= 4) : QUESTION_DATABASE.filter(q => q.mode === this.currentMode);
            this.questionPool = this.shuffleArray([...rawQuestions]);
        }
        this.currentQ = this.questionPool.pop();
        this.sessionHistory.push(this.currentQ);

        this.ui.qText.innerText = this.currentQ.text;
        this.ui.code.innerHTML = "";
        let i = 0; const txt = this.currentQ.code; 
        const type = () => { if(i < txt.length) { this.ui.code.innerHTML += txt.charAt(i); i++; setTimeout(type, 15); } };
        type();
        this.ui.input.value = "";
    }

    checkAnswer() {
        if (!this.isPlaying) return;
        const ans = this.ui.input.value.trim().toLowerCase();
        if (ans === this.currentQ.ans.toLowerCase()) {
            this.score += 150;
            this.ui.score.innerText = this.score;
            this.sound.playCorrect();
            
            // --- TIME BONUS LOGIC ---
            this.consecutiveWins++;
            if (this.consecutiveWins === 3) {
                this.timer += 10;
                this.sound.playBonus();
                this.showFloatingText("+10s TIME BONUS!", "#ffff00");
                this.consecutiveWins = 0; // Reset counter
            } else {
                this.showFloatingText("+150", "#00ff00");
            }

            this.ui.input.style.borderColor = "#0f0";
            setTimeout(() => this.ui.input.style.borderColor = "var(--neon-green)", 300);
            this.ui.monster.style.filter = "brightness(2) drop-shadow(0 0 10px red)";
            setTimeout(() => this.ui.monster.style.filter = "none", 200);

            if (this.score >= this.winScore) {
                this.gameWin();
                return;
            }
            setTimeout(() => this.nextTurn(), 500);
        } else {
            this.consecutiveWins = 0; // Reset Combo
            this.hp -= 20;
            this.ui.hpBar.style.width = this.hp + "%";
            this.sound.playWrong();
            this.ui.input.value = "";
            if(this.hp <= 0) this.gameOver();
        }
    }

    showFloatingText(msg, color) {
        this.ui.damageText.innerText = msg;
        this.ui.damageText.style.color = color;
        this.ui.damageText.style.opacity = 1; 
        this.ui.damageText.style.top = "-50px";
        setTimeout(() => { this.ui.damageText.style.opacity = 0; this.ui.damageText.style.top = "-20px"; }, 800);
    }

    useHint() {
        if(this.hints > 0) {
            this.hints--; this.score = Math.max(0, this.score - 50);
            this.ui.input.value = this.currentQ.ans.substring(0, 1);
            document.getElementById('btn-hint').innerText = `HINT(${this.hints})`;
        }
    }
    usePotion() {
        if(this.potions > 0 && this.hp < 100) {
            this.potions--; this.hp = Math.min(100, this.hp + 30);
            document.getElementById('btn-potion').innerText = `HP(${this.potions})`;
            this.ui.hpBar.style.width = this.hp + "%";
        }
    }
    useSkip() {
        if(this.skips > 0) {
            this.skips--; this.score = Math.max(0, this.score - 100);
            document.getElementById('btn-skip').innerText = `SKIP(${this.skips})`;
            this.consecutiveWins = 0; // Reset combo on skip
            this.nextTurn();
        }
    }

    gameWin() {
        this.isPlaying = false;
        clearInterval(this.timerInterval);
        this.sound.playWin();
        this.saveScore();
        this.ui.endTitle.innerText = "MISSION ACCOMPLISHED";
        this.ui.endTitle.className = "glitch-title win-text";
        this.showEndScreen();
    }

    gameOver() {
        this.isPlaying = false;
        clearInterval(this.timerInterval);
        this.saveScore();
        this.ui.endTitle.innerText = "SESSION END";
        this.ui.endTitle.className = "glitch-title danger-text";
        this.showEndScreen();
    }

    showEndScreen() {
        this.ui.finalName.innerText = this.playerName;
        this.ui.finalScore.innerText = this.score;
        this.ui.finalMode.innerText = this.currentMode;
        this.ui.reviewBox.innerHTML = "";
        this.sessionHistory.forEach((q, i) => {
            this.ui.reviewBox.innerHTML += `
                <div class="review-item">
                    <div style="color:#fff;">${i+1}. ${q.text}</div>
                    <div style="color:#0ff; font-family:monospace;">${q.code}</div>
                    <div style="color:#0f0;">Ans: ${q.ans}</div>
                    <div style="color:#aaa; font-style:italic; font-size:0.8rem;">💡 ${q.explanation}</div>
                </div>`;
        });
        this.switchScene('over');
    }

    saveScore() {
        this.leaderboard.push({ name: this.playerName, score: this.score, mode: this.currentMode });
        this.leaderboard.sort((a,b) => b.score - a.score);
        this.leaderboard = this.leaderboard.slice(0, 10);
        localStorage.setItem('pythonHunter_lb', JSON.stringify(this.leaderboard));
        this.updateLeaderboardDisplay();
    }

    updateLeaderboardDisplay() {
        if(this.leaderboard.length > 0) document.getElementById('top-player-name').innerText = this.leaderboard[0].name;
    }

    showLeaderboard() {
        document.getElementById('leaderboard-body').innerHTML = this.leaderboard.map((p,i) => `<tr><td>${i+1}</td><td>${p.name}</td><td>${p.score}</td><td>${p.mode}</td></tr>`).join('');
        this.switchScene('leaderboard');
    }
    showArchive() { this.switchScene('archive'); }
    switchScene(name) {
        Object.values(this.ui.scenes).forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });
        this.ui.scenes[name].classList.remove('hidden'); setTimeout(() => this.ui.scenes[name].classList.add('active'), 10);
    }
    startTimer() {
        clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            if(!this.isPlaying) return;
            this.timer--; this.ui.timer.innerText = this.timer;
            if(this.timer <= 0) this.gameOver();
        }, 1000);
    }
}
const game = new GameEngine();