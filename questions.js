const QUESTION_DATABASE = [
    // ==========================================
    // LEVEL 1: BASICS & VARIABLES (พื้นฐานสุดๆ)
    // ==========================================
    { 
        id: 101, 
        level: 1, 
        text: "แสดงผลข้อความทางหน้าจอ Console", 
        code: "____('System Online')", 
        ans: "print", 
        hint: "คำสั่งพื้นฐานที่สุด (p____)" 
    },
    { 
        id: 102, 
        level: 1, 
        text: "รับค่า Input จากผู้ใช้", 
        code: "user = ____('Username: ')", 
        ans: "input", 
        hint: "ตรงข้ามกับ output (i____)" 
    },
    { 
        id: 103, 
        level: 1, 
        text: "แปลงค่า String เป็นตัวเลขจำนวนเต็ม", 
        code: "hp = ____('100')", 
        ans: "int", 
        hint: "ย่อมาจาก Integer" 
    },
    { 
        id: 104, 
        level: 1, 
        text: "หาความยาวของข้อความ หรือ List", 
        code: "size = ____(my_list)", 
        ans: "len", 
        hint: "ย่อมาจาก length" 
    },
    { 
        id: 105, 
        level: 1, 
        text: "แปลงค่าเป็นข้อความ (String)", 
        code: "msg = 'Score: ' + ____(150)", 
        ans: "str", 
        hint: "ย่อมาจาก String" 
    },

    // ==========================================
    // LEVEL 2: CONTROL FLOW (เงื่อนไขและลูป)
    // ==========================================
    { 
        id: 201, 
        level: 2, 
        text: "เงื่อนไข: ถ้าคะแนนมากกว่า 50", 
        code: "____ score > 50:", 
        ans: "if", 
        hint: "ถ้า... (ภาษาอังกฤษ)" 
    },
    { 
        id: 202, 
        level: 2, 
        text: "เงื่อนไขทางเลือก (Else If)", 
        code: "____ score > 30:", 
        ans: "elif", 
        hint: "ใน Python ใช้ elif ไม่ใช่ else if" 
    },
    { 
        id: 203, 
        level: 2, 
        text: "กรณีเงื่อนไขไม่ตรงกับอะไรเลย", 
        code: "____:", 
        ans: "else", 
        hint: "มิฉะนั้น..." 
    },
    { 
        id: 204, 
        level: 2, 
        text: "Loop ทำงานตามจำนวนรอบ", 
        code: "for i in ____(10):", 
        ans: "range", 
        hint: "ฟังก์ชันสร้างช่วงตัวเลข (r____)" 
    },
    { 
        id: 205, 
        level: 2, 
        text: "Loop ทำงานเมื่อเงื่อนไขเป็นจริง", 
        code: "____ hp > 0:", 
        ans: "while", 
        hint: "ทำซ้ำ 'ขณะที่'..." 
    },
    { 
        id: 206, 
        level: 2, 
        text: "หยุดการทำงานของ Loop ทันที", 
        code: "if dead: ____", 
        ans: "break", 
        hint: "หัก/หยุด (b____)" 
    },

    // ==========================================
    // LEVEL 3: DATA STRUCTURES (List & Dict)
    // ==========================================
    { 
        id: 301, 
        level: 3, 
        text: "เพิ่มข้อมูลต่อท้าย List", 
        code: "inventory.____('Sword')", 
        ans: "append", 
        hint: "ภาษาอังกฤษแปลว่า 'แนบท้าย'" 
    },
    { 
        id: 302, 
        level: 3, 
        text: "ลบข้อมูลออกจาก List", 
        code: "inventory.____('Trash')", 
        ans: "remove", 
        hint: "ภาษาอังกฤษแปลว่า 'ลบออก'" 
    },
    { 
        id: 303, 
        level: 3, 
        text: "เรียงลำดับข้อมูลใน List", 
        code: "scores.____()", 
        ans: "sort", 
        hint: "จัดเรียง (s____)" 
    },
    { 
        id: 304, 
        level: 3, 
        text: "ดึง Keys ทั้งหมดจาก Dictionary", 
        code: "user_data.____()", 
        ans: "keys", 
        hint: "กุญแจ (เติม s)" 
    },

    // ==========================================
    // LEVEL 4: FUNCTIONS & MODULES (เริ่มยาก)
    // ==========================================
    { 
        id: 401, 
        level: 4, 
        text: "ประกาศสร้างฟังก์ชันใหม่", 
        code: "____ cal_damage(atk):", 
        ans: "def", 
        hint: "Define (ย่อเหลือ 3 ตัว)" 
    },
    { 
        id: 402, 
        level: 4, 
        text: "ส่งค่ากลับจากฟังก์ชัน", 
        code: "____ total_damage", 
        ans: "return", 
        hint: "ย้อนกลับ/ส่งคืน" 
    },
    { 
        id: 403, 
        level: 4, 
        text: "เรียกใช้ Library ภายนอก", 
        code: "____ random", 
        ans: "import", 
        hint: "นำเข้า" 
    },
    { 
        id: 404, 
        level: 4, 
        text: "สุ่มตัวเลขจำนวนเต็ม", 
        code: "x = random.____(1, 100)", 
        ans: "randint", 
        hint: "random + integer" 
    },
    { 
        id: 405, 
        level: 4, 
        text: "ฟังก์ชันรากที่สอง (Square Root)", 
        code: "math.____(16)", 
        ans: "sqrt", 
        hint: "SQuare RooT (ย่อ)" 
    },

    // ==========================================
    // LEVEL 5: OOP & CLASS (ระดับบอส)
    // ==========================================
    { 
        id: 501, 
        level: 5, 
        text: "ประกาศสร้าง Class ใหม่", 
        code: "____ Monster:", 
        ans: "class", 
        hint: "แม่พิมพ์ของ Object" 
    },
    { 
        id: 502, 
        level: 5, 
        text: "Constructor Function (ฟังก์ชันเริ่มแรก)", 
        code: "def ____(self, name):", 
        ans: "__init__", 
        hint: "init มี underscore หน้าหลังอย่างละ 2" 
    },
    { 
        id: 503, 
        level: 5, 
        text: "ตัวแปรแทนตัว Object นั้นๆ", 
        code: "____.name = name", 
        ans: "self", 
        hint: "ตัวเอง" 
    },
    { 
        id: 504, 
        level: 5, 
        text: "สร้าง Object จาก Class (Instantiate)", 
        code: "boss = Monster____", 
        ans: "()", 
        hint: "วงเล็บเปิดปิด" 
    }
];