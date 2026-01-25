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
   PART 2: AUDIO SYNTHESIZER
   ========================================= */
class SoundSys {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }

    playTone(freq, type, duration, vol = 0.1) {
        if(this.ctx.state === 'suspended') this.ctx.resume();
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
        setTimeout(() => this.playTone(800, 'square', 0.3), 200);
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
    const count = 15; // จำนวนอนุภาค
    for(let i=0; i<count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        
        // Random direction
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;
        p.style.setProperty('--tx', `${tx}px`);
        p.style.setProperty('--ty', `${ty}px`);
        
        // Random color (Green or White)
        p.style.background = Math.random() > 0.5 ? '#0f0' : '#fff';

        container.appendChild(p);
        setTimeout(() => p.remove(), 500); // Remove after animation
    }
}

/* =========================================
   PART 4: GAME ENGINE
   ========================================= */
class GameEngine {
    constructor() {
        this.score = 0;
        this.highScore = parseInt(localStorage.getItem('pythonHunter_highScore')) || 0;
        this.hp = 100;
        this.timer = 60;
        this.combo = 0;
        this.hints = 3;
        this.potions = 3;
        this.skips = 3;
        this.currentQ = null;
        this.isPlaying = false;
        this.timerInterval = null;
        this.sessionHistory = [];
        this.sound = new SoundSys();

        this.ui = {
            hpBar: document.getElementById('player-hp-bar'),
            score: document.getElementById('score-display'),
            highScore: document.getElementById('highscore-display'),
            menuHighScore: document.getElementById('menu-highscore'),
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
            scenes: {
                menu: document.getElementById('menu-scene'),
                game: document.getElementById('game-scene'),
                over: document.getElementById('gameover-scene'),
                tutorial: document.getElementById('tutorial-scene')
            },
            finalScore: document.getElementById('final-score'),
            finalRank: document.getElementById('final-rank'),
            finalHighScore: document.getElementById('final-highscore')
        };

        this.updateHighScoreDisplay();
        
        // Input Events & Mobile Fix
        this.ui.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.checkAnswer();
            else this.sound.playType();
        });
        
        // Ensure input stays visible on mobile keyboard show
        this.ui.input.addEventListener('focus', () => {
            setTimeout(() => {
                this.ui.input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        });

        document.getElementById('attack-btn').addEventListener('click', () => this.checkAnswer());
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

    switchScene(sceneName) {
        Object.values(this.ui.scenes).forEach(el => { if(el) { el.classList.add('hidden'); el.classList.remove('active'); } });
        if(this.ui.scenes[sceneName]) { this.ui.scenes[sceneName].classList.remove('hidden'); this.ui.scenes[sceneName].classList.add('active'); }
    }

    resetStats() {
        this.score = 0;
        this.hp = 100;
        this.timer = 60;
        this.combo = 0;
        this.hints = 3;
        this.potions = 3;
        this.skips = 3;
        this.sessionHistory = [];
        this.ui.btnHint.innerText = `HINT(${this.hints})`;
        this.ui.btnPotion.innerText = `HP(${this.potions})`;
        this.ui.btnSkip.innerText = `SKIP(${this.skips})`;
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
        
        // Boss Mode Logic
        if(this.currentQ.level >= 4) this.ui.monster.classList.add('boss-mode');
        else this.ui.monster.classList.remove('boss-mode');
    }

    typewriterEffect(text, element) {
        element.innerHTML = '';
        let i = 0;
        const speed = 15; 
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
        this.timer = Math.min(60, this.timer + 5);
        
        this.showDamage(`+${100 + bonus}`, 'critical');
        this.ui.input.classList.add('valid');
        setTimeout(() => this.ui.input.classList.remove('valid'), 200);

        // Particle Effect
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
            this.ui.btnHint.innerText = `HINT(${this.hints})`;
            this.ui.input.value = this.currentQ.ans.substring(0, 1);
            this.ui.input.focus();
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
            this.ui.btnSkip.innerText = `SKIP(${this.skips})`;
            this.showDamage("SKIPPED", 'critical');
            this.nextTurn();
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

    updateHighScoreDisplay() {
        const text = this.highScore.toString().padStart(5, '0');
        this.ui.menuHighScore.innerText = text;
        this.ui.highScore.innerText = text;
        if(this.ui.finalHighScore) this.ui.finalHighScore.innerText = text;
    }

    gameOver() {
        this.sound.playWin();
        this.isPlaying = false;
        clearInterval(this.timerInterval);
        
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('pythonHunter_highScore', this.highScore);
            this.updateHighScoreDisplay();
        }

        this.ui.finalScore.innerText = this.score;
        this.ui.finalHighScore.innerText = this.highScore;
        
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
            `;
            this.ui.reviewBox.appendChild(itemDiv);
        });
    }
}

const game = new GameEngine();