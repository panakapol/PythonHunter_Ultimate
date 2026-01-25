/* =========================================
   PART 1: MATRIX RAIN
   ========================================= */
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 14;
const columns = canvas.width / fontSize;
const rainDrops = Array.from({ length: Math.ceil(columns) }).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) rainDrops[i] = 0;
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 50);

/* =========================================
   PART 2: AUDIO SYNTHESIZER (With Mute)
   ========================================= */
class SoundSys {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.muted = false; // สถานะปิดเสียง
    }

    toggleMute() {
        this.muted = !this.muted;
        return this.muted;
    }

    playTone(freq, type, duration, vol = 0.1) {
        if (this.muted) return; // ถ้าปิดเสียงอยู่ ไม่ต้องเล่น
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = type; 
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    playStart() { 
        this.playTone(400, 'square', 0.1); 
        setTimeout(() => this.playTone(600, 'square', 0.1), 100); 
    }
    playCorrect() { 
        this.playTone(800, 'sine', 0.1); 
        setTimeout(() => this.playTone(1200, 'sine', 0.2), 80); 
    }
    playWrong() { 
        this.playTone(150, 'sawtooth', 0.2); 
        setTimeout(() => this.playTone(100, 'sawtooth', 0.3), 100); 
    }
    playType() { this.playTone(600 + Math.random()*200, 'triangle', 0.03, 0.05); }
    playWin() { 
        [400, 500, 600, 800, 1000].forEach((f, i) => setTimeout(() => this.playTone(f, 'square', 0.2), i*150));
    }
}

/* =========================================
   PART 3: PARTICLE SYSTEM
   ========================================= */
function spawnParticles(x, y) {
    const container = document.getElementById('particles-container');
    if(!container) return; 
    const count = 15; 
    for(let i=0; i<count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;
        p.style.setProperty('--tx', `${tx}px`);
        p.style.setProperty('--ty', `${ty}px`);
        
        p.style.background = Math.random() > 0.5 ? '#0f0' : '#fff';
        container.appendChild(p);
        setTimeout(() => p.remove(), 500); 
    }
}

/* =========================================
   PART 4: GAME ENGINE
   ========================================= */
class GameEngine {
    constructor() {
        this.playerName = "PLAYER";
        this.score = 0;
        this.hp = 100;
        this.selectedTime = 60; // Default time
        this.timer = 60;
        this.combo = 0;
        this.hints = 3;
        this.potions = 3;
        this.skips = 3;
        this.currentQ = null;
        this.isPlaying = false;
        this.timerInterval = null;
        this.sessionHistory = [];
        this.leaderboard = JSON.parse(localStorage.getItem('pythonHunter_leaderboard')) || [];
        this.sound = new SoundSys();

        this.ui = {
            hpBar: document.getElementById('player-hp-bar'),
            score: document.getElementById('score-display'),
            timer: document.getElementById('timer-display'),
            code: document.getElementById('code-display'),
            mission: document.getElementById('mission-text'),
            input: document.getElementById('player-input'),
            combo: document.getElementById('combo-display'),
            monster: document.getElementById('monster-sprite'),
            btnHint: document.getElementById('btn-hint'),
            btnPotion: document.getElementById('btn-potion'),
            btnSkip: document.getElementById('btn-skip'),
            reviewBox: document.getElementById('review-box'),
            soundBtn: document.getElementById('sound-toggle'), // ปุ่มเสียง
            nameInput: document.getElementById('player-name-input'),
            currentPlayer: document.getElementById('current-player-display'),
            leaderboardBody: document.getElementById('leaderboard-body'),
            topPlayerName: document.getElementById('top-player-name'),
            menuHighScore: document.getElementById('menu-highscore'),
            finalName: document.getElementById('final-name'),
            finalScore: document.getElementById('final-score'),
            finalRank: document.getElementById('final-rank'),
            scenes: {
                menu: document.getElementById('menu-scene'),
                game: document.getElementById('game-scene'),
                over: document.getElementById('gameover-scene'),
                tutorial: document.getElementById('tutorial-scene'),
                leaderboard: document.getElementById('leaderboard-scene')
            }
        };

        this.updateLeaderboardDisplay();
        
        // Events
        this.ui.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.checkAnswer();
            else this.sound.playType();
        });
        
        this.ui.input.addEventListener('focus', () => {
            setTimeout(() => {
                this.ui.input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        });

        document.getElementById('attack-btn').addEventListener('click', () => this.checkAnswer());
        
        // Sound Toggle Event
        this.ui.soundBtn.addEventListener('click', () => {
            const isMuted = this.sound.toggleMute();
            this.ui.soundBtn.innerText = isMuted ? "🔇 OFF" : "🔊 ON";
            this.ui.soundBtn.classList.toggle('sound-off', isMuted);
        });
    }

    // ตั้งค่าเวลาจากหน้าเมนู
    setTime(seconds) {
        this.selectedTime = seconds;
        // Update UI Button states
        document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        this.sound.playStart();
    }

    // ตรวจสอบชื่อก่อนเริ่ม
    validateAndStart() {
        const name = this.ui.nameInput.value.trim();
        if (!name) {
            alert("⚠️ PLEASE IDENTIFY YOURSELF! (กรุณากรอกชื่อ)");
            this.ui.nameInput.focus();
            return;
        }
        this.playerName = name.toUpperCase();
        this.start();
    }

    start() {
        this.sound.playStart();
        this.switchScene('game');
        this.resetStats();
        this.isPlaying = true;
        this.nextTurn();
        this.startTimer();
        this.ui.input.focus();
    }

    showTutorial() { this.switchScene('tutorial'); }
    
    showLeaderboard() {
        this.renderLeaderboardTable();
        this.switchScene('leaderboard');
    }

    switchScene(sceneName) {
        Object.values(this.ui.scenes).forEach(el => { if(el) { el.classList.add('hidden'); el.classList.remove('active'); } });
        if(this.ui.scenes[sceneName]) { this.ui.scenes[sceneName].classList.remove('hidden'); this.ui.scenes[sceneName].classList.add('active'); }
    }

    resetStats() {
        this.score = 0;
        this.hp = 100;
        this.timer = this.selectedTime; // ใช้เวลาที่เลือกมา
        this.combo = 0;
        this.hints = 3;
        this.potions = 3;
        this.skips = 3;
        this.sessionHistory = [];
        
        this.ui.currentPlayer.innerText = this.playerName;
        this.ui.btnHint.innerText = `HINT(-50)`;
        this.ui.btnPotion.innerText = `HP(${this.potions})`;
        this.ui.btnSkip.innerText = `SKIP(-100)`;
        this.ui.btnHint.disabled = false;
        this.ui.btnPotion.disabled = false;
        this.ui.btnSkip.disabled = false;
        this.updateHUD();
    }

    startTimer() {
        clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            if (!this.isPlaying) return;
            this.timer--;
            this.updateHUD();
            if (this.timer <= 0) this.gameOver();
        }, 1000);
    }

    nextTurn() {
        let pool;
        if (this.score < 500) pool = QUESTION_DATABASE.filter(q => q.level <= 2);
        else if (this.score < 1500) pool = QUESTION_DATABASE.filter(q => q.level <= 3);
        else pool = QUESTION_DATABASE.filter(q => q.level >= 3);

        if (!pool || !pool.length) pool = QUESTION_DATABASE;
        this.currentQ = pool[Math.floor(Math.random() * pool.length)];
        this.sessionHistory.push(this.currentQ);

        this.typewriterEffect(this.currentQ.code, this.ui.code);
        const typeTag = `<span style="color:#0f0;">[TYPE: ${this.currentQ.type}]</span>`;
        this.ui.mission.innerHTML = `${typeTag} ${this.currentQ.text}`;
        
        this.ui.input.value = '';
        this.ui.monster.classList.remove('hit');
        
        if(this.currentQ.level >= 4) this.ui.monster.classList.add('boss-mode');
        else this.ui.monster.classList.remove('boss-mode');
    }

    typewriterEffect(text, element) {
        element.innerHTML = '';
        let i = 0;
        const speed = 10; 
        const type = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        type();
    }

    checkAnswer() {
        if (!this.isPlaying) return;
        const playerAns = this.ui.input.value.trim();
        if (playerAns.toLowerCase() === this.currentQ.ans.toLowerCase()) {
            this.handleSuccess();
        } else {
            this.handleFail();
        }
        this.updateHUD();
    }

    handleSuccess() {
        this.sound.playCorrect();
        this.combo++;
        const bonus = (this.combo * 10) + (this.currentQ.level * 20);
        this.score += 100 + bonus;
        // ไม่บวกเวลาเพิ่มแล้ว เพราะเรา Fix เวลาเล่น
        
        this.showDamage(`+${100 + bonus}`, 'critical');
        this.ui.input.classList.add('valid');
        setTimeout(() => this.ui.input.classList.remove('valid'), 200);

        const mRect = this.ui.monster.getBoundingClientRect();
        spawnParticles(mRect.left + mRect.width/2, mRect.top + mRect.height/2);

        this.ui.monster.classList.add('hit');
        setTimeout(() => this.ui.monster.classList.remove('hit'), 300);
        setTimeout(() => this.nextTurn(), 400);
    }

    handleFail() {
        this.sound.playWrong();
        this.combo = 0;
        this.hp -= 20;
        this.showDamage("-20 HP", 'danger');
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 300);
        this.ui.input.value = '';
        this.ui.input.focus();
        if (this.hp <= 0) this.gameOver();
    }

    useHint() {
        if (this.hints > 0) {
            this.sound.playStart();
            this.hints--;
            this.score = Math.max(0, this.score - 50); // หัก 50 แต้ม
            this.ui.btnHint.innerText = `HINT(${this.hints})`;
            this.ui.input.value = this.currentQ.ans.substring(0, 1);
            this.ui.input.focus();
            this.showDamage("-50 SCORE", 'danger');
            this.updateHUD(); // อัปเดตคะแนน
            if (this.hints === 0) this.ui.btnHint.disabled = true;
        }
    }

    usePotion() {
        if (this.potions > 0 && this.hp < 100) {
            this.sound.playStart();
            this.potions--;
            this.hp = Math.min(100, this.hp + 30);
            this.ui.btnPotion.innerText = `HP(${this.potions})`;
            this.showDamage("+30 HP", 'critical');
            this.updateHUD();
            if (this.potions === 0) this.ui.btnPotion.disabled = true;
        }
    }

    useSkip() {
        if (this.skips > 0) {
            this.sound.playStart();
            this.skips--;
            this.score = Math.max(0, this.score - 100); // หัก 100 แต้ม
            this.ui.btnSkip.innerText = `SKIP(${this.skips})`;
            this.showDamage("SKIPPED (-100)", 'danger');
            this.nextTurn();
            this.updateHUD(); // อัปเดตคะแนน
            if (this.skips === 0) this.ui.btnSkip.disabled = true;
        }
    }

    showDamage(text, type) {
        const dmg = document.getElementById('damage-text');
        dmg.innerText = text;
        dmg.className = 'damage-text ' + type;
        dmg.style.animation = 'none';
        dmg.offsetHeight; 
        dmg.style.animation = 'floatUp 1s ease-out';
    }

    updateHUD() {
        this.ui.score.innerText = this.score.toString().padStart(5, '0');
        this.ui.timer.innerText = this.timer;
        this.ui.hpBar.style.width = this.hp + '%';
        this.ui.hpBar.style.background = this.hp > 50 ? '#0f0' : (this.hp > 20 ? '#ff0' : '#f00');
        
        if(this.combo > 1) {
            this.ui.combo.classList.remove('hidden');
            this.ui.combo.innerText = `x${this.combo}`;
        } else {
            this.ui.combo.classList.add('hidden');
        }
    }

    // อัปเดต Leaderboard ใน LocalStorage
    saveScoreToLeaderboard() {
        // เพิ่มข้อมูลผู้เล่นใหม่ลง Array
        this.leaderboard.push({
            name: this.playerName,
            score: this.score,
            timeMode: this.selectedTime
        });

        // เรียงลำดับจากมากไปน้อย
        this.leaderboard.sort((a, b) => b.score - a.score);

        // เก็บแค่ Top 10
        this.leaderboard = this.leaderboard.slice(0, 10);

        // บันทึกลงเครื่อง
        localStorage.setItem('pythonHunter_leaderboard', JSON.stringify(this.leaderboard));
    }

    updateLeaderboardDisplay() {
        // โชว์คนเก่งสุดในหน้าเมนู
        if (this.leaderboard.length > 0) {
            this.ui.topPlayerName.innerText = this.leaderboard[0].name;
            this.ui.menuHighScore.innerText = this.leaderboard[0].score;
        }
    }

    renderLeaderboardTable() {
        this.ui.leaderboardBody.innerHTML = '';
        this.leaderboard.forEach((player, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${player.name}</td>
                <td style="color:#0f0;">${player.score}</td>
                <td>${player.timeMode}s</td>
            `;
            this.ui.leaderboardBody.appendChild(row);
        });
    }

    gameOver() {
        this.sound.playWin();
        this.isPlaying = false;
        clearInterval(this.timerInterval);
        
        this.saveScoreToLeaderboard();
        this.updateLeaderboardDisplay();

        this.ui.finalName.innerText = this.playerName;
        this.ui.finalScore.innerText = this.score;
        
        let rank = "BEGINNER";
        if(this.score > 1000) rank = "INTERMEDIATE";
        if(this.score > 3000) rank = "PYTHON MASTER";
        
        this.ui.finalRank.innerText = rank;
        this.generateReview(); 
        this.switchScene('over');
    }

    generateReview() {
        this.ui.reviewBox.innerHTML = ''; 
        this.sessionHistory.forEach((q, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'review-item';
            itemDiv.innerHTML = `
                <div style="color: #fff; margin-bottom: 2px;">${index + 1}. ${q.text}</div>
                <div class="review-code">${q.code.replace('____', '<span style="color:#f00">____</span>')}</div>
                <div style="color:#0f0; font-size:0.8rem;">Ans: ${q.ans}</div>
                <div style="color:#aaa; font-size:0.8rem; margin-top:5px; font-style:italic;">💡 ${q.explanation}</div>
            `;
            this.ui.reviewBox.appendChild(itemDiv);
        });
    }
}

const game = new GameEngine();