/* =========================================
   PART 1: MATRIX RAIN EFFECT (Visuals)
   ========================================= */
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\*&^%$#@!';
const fontSize = 16;
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
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 30);


/* =========================================
   PART 2: GAME ENGINE (OOP & Computational Logic)
   ========================================= */
class GameEngine {
    constructor() {
        // State Initialization
        this.score = 0;
        this.hp = 100;
        this.maxHp = 100;
        this.timer = 60;
        this.combo = 0;
        this.hints = 3;
        this.potions = 3;
        this.currentQ = null;
        this.isPlaying = false;
        this.timerInterval = null;
        
        // DOM Elements Cache
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
            scenes: {
                menu: document.getElementById('menu-scene'),
                game: document.getElementById('game-scene'),
                over: document.getElementById('gameover-scene'),
                tutorial: document.getElementById('tutorial-scene')
            },
            finalScore: document.getElementById('final-score'),
            finalRank: document.getElementById('final-rank')
        };

        // Event Binding
        this.ui.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.checkAnswer();
        });
        document.getElementById('attack-btn').addEventListener('click', () => this.checkAnswer());
    }

    start() {
        this.switchScene('game');
        this.resetStats();
        this.isPlaying = true;
        this.nextTurn();
        this.startTimer();
        this.ui.input.focus();
    }

    showTutorial() {
        this.switchScene('tutorial');
    }

    switchScene(sceneName) {
        Object.values(this.ui.scenes).forEach(el => {
            if(el) {
                el.classList.add('hidden');
                el.classList.remove('active');
            }
        });
        if(this.ui.scenes[sceneName]) {
            this.ui.scenes[sceneName].classList.remove('hidden');
            this.ui.scenes[sceneName].classList.add('active');
        }
    }

    resetStats() {
        this.score = 0;
        this.hp = 100;
        this.timer = 60;
        this.combo = 0;
        this.hints = 3;
        this.potions = 3;
        
        this.ui.btnHint.innerText = `DECRYPT_KEY (${this.hints})`;
        this.ui.btnPotion.innerText = `REPAIR_KIT (${this.potions})`;
        this.ui.btnHint.disabled = false;
        this.ui.btnPotion.disabled = false;
        
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

    // Algorithm: Adaptive Difficulty Selection
    nextTurn() {
        let availableQuestions;

        // Logic เลือกโจทย์ตามระดับความยาก (Adaptive)
        if (this.score < 500) {
            availableQuestions = QUESTION_DATABASE.filter(q => q.level <= 2);
        } else if (this.score < 1500) {
            availableQuestions = QUESTION_DATABASE.filter(q => q.level <= 3);
        } else {
            availableQuestions = QUESTION_DATABASE.filter(q => q.level >= 3);
        }

        if (!availableQuestions || availableQuestions.length === 0) {
            availableQuestions = QUESTION_DATABASE;
        }

        this.currentQ = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
        
        // Display Code & Mission with Logic Type
        this.ui.code.innerText = this.currentQ.code; // innerText รองรับ \n ได้ดีกว่า
        
        // แสดงประเภทของโจทย์ (Computational Thinking Elements)
        const typeTag = `<span style="color:#0f0; font-weight:bold;">[ PROCESS: ${this.currentQ.type} ]</span>`;
        this.ui.mission.innerHTML = `${typeTag} ${this.currentQ.text}`;
        
        this.ui.input.value = '';
        this.ui.monster.classList.remove('hit');
    }

    checkAnswer() {
        if (!this.isPlaying) return;
        
        const playerAns = this.ui.input.value.trim(); // เอา toLowerCase ออกบางส่วนถ้าต้องการ Case Sensitive แต่โจทย์เราส่วนใหญ่เป็นตัวพิมพ์เล็กหรือตัวเลขอยู่แล้ว
        const correctAns = this.currentQ.ans;

        // Validation Logic
        if (playerAns.toLowerCase() === correctAns.toLowerCase()) {
            this.handleSuccess();
        } else {
            this.handleFail();
        }
        this.updateHUD();
    }

    handleSuccess() {
        this.combo++;
        // Algorithm การคำนวณคะแนน
        const bonus = (this.combo * 10) + (this.currentQ.level * 20);
        this.score += 100 + bonus;
        this.timer = Math.min(60, this.timer + 5);
        
        this.showDamage(`CALCULATION COMPLETE! +${100 + bonus}`, 'critical');
        this.ui.input.classList.add('valid');
        setTimeout(() => this.ui.input.classList.remove('valid'), 200);

        this.ui.monster.classList.add('hit');
        setTimeout(() => this.ui.monster.classList.remove('hit'), 300);

        this.nextTurn();
    }

    handleFail() {
        this.combo = 0;
        this.hp -= 20;
        this.showDamage("LOGIC ERROR! -20 HP", 'danger');
        
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 300);

        this.ui.input.value = '';
        this.ui.input.focus();

        if (this.hp <= 0) this.gameOver();
    }

    useHint() {
        if (this.hints > 0) {
            this.hints--;
            this.ui.btnHint.innerText = `DECRYPT_KEY (${this.hints})`;
            
            // Algorithm การใบ้: ตัดตัวอักษร 1-2 ตัวแรกมาโชว์
            const hintText = this.currentQ.ans.substring(0, 1);
            this.ui.input.value = hintText;
            this.ui.input.focus();
            
            this.showDamage("HINT INJECTED", 'critical');
            
            if (this.hints === 0) this.ui.btnHint.disabled = true;
        }
    }

    usePotion() {
        if (this.potions > 0 && this.hp < 100) {
            this.potions--;
            this.hp = Math.min(100, this.hp + 30);
            this.ui.btnPotion.innerText = `REPAIR_KIT (${this.potions})`;
            this.showDamage("SYSTEM REPAIRED +30 HP", 'critical');
            this.updateHUD();
            
            if (this.potions === 0) this.ui.btnPotion.disabled = true;
        }
    }

    showDamage(text, type) {
        const dmg = document.getElementById('damage-text');
        dmg.innerText = text;
        dmg.className = 'damage-text'; 
        dmg.classList.add(type);
        
        dmg.style.animation = 'none';
        dmg.offsetHeight; 
        dmg.style.animation = 'floatUp 1s ease-out';
    }

    updateHUD() {
        this.ui.score.innerText = this.score.toString().padStart(5, '0');
        this.ui.timer.innerText = this.timer;
        this.ui.hpBar.style.width = this.hp + '%';
        
        // Conditional Rendering for HP Bar Color
        if (this.hp > 50) this.ui.hpBar.style.background = '#0f0';
        else if (this.hp > 20) this.ui.hpBar.style.background = '#ff0';
        else this.ui.hpBar.style.background = '#f00';

        if(this.combo > 1) {
            this.ui.combo.classList.remove('hidden');
            this.ui.combo.innerText = `COMBO THREAD x${this.combo}`;
        } else {
            this.ui.combo.classList.add('hidden');
        }
    }

    gameOver() {
        this.isPlaying = false;
        clearInterval(this.timerInterval);
        
        this.ui.finalScore.innerText = this.score;
        
        let rank = "BEGINNER";
        if(this.score > 1000) rank = "LOGICIAN (นักตรรกะ)";
        if(this.score > 2500) rank = "ALGORITHM MASTER";
        if(this.score > 4000) rank = "THE PYTHON HUNTER";
        
        this.ui.finalRank.innerText = rank;
        this.ui.finalRank.style.color = "#0f0";
        
        this.switchScene('over');
    }
}

// Start Game Engine
const game = new GameEngine();