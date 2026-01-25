const QUESTION_DATABASE = [
    // ==========================================
    // LEVEL 1: BASIC SYNTAX (พื้นฐานไวยากรณ์)
    // ==========================================
    { id: 101, level: 1, type: 'SYNTAX', text: "คำสั่งแสดงผลทางหน้าจอ", code: "____('System Ready')", ans: "print", hint: "p____" },
    { id: 102, level: 1, type: 'SYNTAX', text: "แปลงข้อมูลเป็นจำนวนเต็ม", code: "x = ____('10')", ans: "int", hint: "integer" },
    { id: 103, level: 1, type: 'SYNTAX', text: "รับค่าจากผู้ใช้ (User Input)", code: "name = ____('Enter Name:')", ans: "input", hint: "ตรงข้าม output" },
    { id: 104, level: 1, type: 'SYNTAX', text: "เช็คชนิดข้อมูล (Check Type)", code: "print(____(3.14))", ans: "type", hint: "ชนิด" },
    { id: 105, level: 1, type: 'SYNTAX', text: "แปลงเป็นข้อความ (String)", code: "msg = 'Level ' + ____(5)", ans: "str", hint: "string" },
    { id: 106, level: 1, type: 'SYNTAX', text: "ค่าความจริง (Boolean) ว่างเปล่า/เท็จ", code: "flag = ____", ans: "False", hint: "ตรงข้าม True" },
    { id: 107, level: 1, type: 'SYNTAX', text: "ตัวดำเนินการทางตรรกะ 'และ'", code: "if A ____ B:", ans: "and", hint: "และ" },
    { id: 108, level: 1, type: 'SYNTAX', text: "ตัวดำเนินการทางตรรกะ 'หรือ'", code: "if A ____ B:", ans: "or", hint: "หรือ" },

    // ==========================================
    // LEVEL 2: LOGIC & CONDITIONS (ตรรกะและเงื่อนไข)
    // ==========================================
    { id: 201, level: 2, type: 'LOGIC', text: "ตรวจสอบความเท่ากัน", code: "if x ____ 10:", ans: "==", hint: "เท่ากับ 2 ตัว" },
    { id: 202, level: 2, type: 'LOGIC', text: "ตรวจสอบว่า 'ไม่เท่ากับ'", code: "if x ____ 0:", ans: "!=", hint: "ตกใจ + เท่ากับ" },
    { id: 203, level: 2, type: 'LOGIC', text: "เงื่อนไขทางเลือก (Else If)", code: "____ x > 5:", ans: "elif", hint: "ย่อมาจาก Else If" },
    { id: 204, level: 2, type: 'LOGIC', text: "กรณีไม่เข้าเงื่อนไขใดเลย", code: "____:", ans: "else", hint: "มิฉะนั้น" },
    { id: 205, level: 2, type: 'LOGIC', text: "ผลลัพธ์ของ 10 หารเอาเศษ 3", code: "print(10 ____ 3)", ans: "%", hint: "Modulo Symbol" },
    { id: 206, level: 2, type: 'LOGIC', text: "ผลลัพธ์: True or False?", code: "print(not True)", ans: "False", hint: "ตรงข้าม True" },
    { id: 207, level: 2, type: 'LOGIC', text: "ผลลัพธ์ของ 2 ยกกำลัง 3", code: "print(2 ____ 3)", ans: "**", hint: "คูณ 2 ครั้ง" },
    { id: 208, level: 2, type: 'LOGIC', text: "x มีค่าเท่าไหร่?", code: "x = 10; x += 5", ans: "15", hint: "10 บวก 5" },

    // ==========================================
    // LEVEL 3: LOOPS & PATTERNS (การวนซ้ำ)
    // ==========================================
    { id: 301, level: 3, type: 'PATTERN', text: "สร้างช่วงตัวเลข 0,1,2,3,4", code: "for i in ____(5):", ans: "range", hint: "ระยะ/ช่วง" },
    { id: 302, level: 3, type: 'ALGO', text: "วนซ้ำตราบเท่าที่เงื่อนไขเป็นจริง", code: "____ hp > 0:", ans: "while", hint: "ขณะที่" },
    { id: 303, level: 3, type: 'ALGO', text: "สั่งหยุดการทำงานของ Loop ทันที", code: "if dead: ____", ans: "break", hint: "เบรค/หยุด" },
    { id: 304, level: 3, type: 'ALGO', text: "ข้ามรอบนี้ไปรอบถัดไป", code: "if safe: ____", ans: "continue", hint: "ไปต่อ" },
    { id: 305, level: 3, type: 'PATTERN', text: "หาความยาวของ List", code: "size = ____(my_list)", ans: "len", hint: "length" },
    { id: 306, level: 3, type: 'ALGO', text: "ผลลัพธ์สุดท้ายของ x", code: "x=0\nfor i in range(3): x+=1", ans: "3", hint: "บวกทีละ 1 สามครั้ง" },
    { id: 307, level: 3, type: 'PATTERN', text: "เริ่ม Loop จาก 1 ถึง 10", code: "range(1, ____)", ans: "11", hint: "ตัวจบต้อง +1" },
    { id: 308, level: 3, type: 'ALGO', text: "Loop ทำงานกี่รอบ?", code: "for i in range(2, 5):", ans: "3", hint: "2, 3, 4" },

    // ==========================================
    // LEVEL 4: DATA STRUCTURES & FUNCTIONS (โครงสร้างข้อมูล)
    // ==========================================
    { id: 401, level: 4, type: 'DATA', text: "เพิ่มข้อมูลต่อท้าย List", code: "items.____('Sword')", ans: "append", hint: "ภาษาอังกฤษแปลว่าแนบท้าย" },
    { id: 402, level: 4, type: 'DATA', text: "ลบข้อมูลออกจาก List", code: "items.____('Trash')", ans: "remove", hint: "เอาออก" },
    { id: 403, level: 4, type: 'DATA', text: "เรียงลำดับข้อมูลใน List", code: "scores.____()", ans: "sort", hint: "จัดเรียง" },
    { id: 404, level: 4, type: 'ABSTRACTION', text: "ประกาศฟังก์ชัน (Define)", code: "____ attack():", ans: "def", hint: "ย่อจาก define" },
    { id: 405, level: 4, type: 'ABSTRACTION', text: "ส่งค่าคืนจากฟังก์ชัน", code: "____ damage", ans: "return", hint: "ย้อนกลับ" },
    { id: 406, level: 4, type: 'DATA', text: "เข้าถึง Value ใน Dictionary", code: "data.____('key')", ans: "get", hint: "ดึงค่า" },
    { id: 407, level: 4, type: 'LIBRARY', text: "นำเข้าโมดูลภายนอก", code: "____ math", ans: "import", hint: "นำเข้า" },
    { id: 408, level: 4, type: 'LIBRARY', text: "สุ่มตัวเลขจำนวนเต็ม", code: "random.____(1, 100)", ans: "randint", hint: "random + integer" },

    // ==========================================
    // LEVEL 5: ALGORITHM TRACING & OOP (ระดับบอส - ยาก)
    // ==========================================
    { id: 501, level: 5, type: 'OOP', text: "สร้าง Class ใหม่", code: "____ Monster:", ans: "class", hint: "แม่แบบวัตถุ" },
    { id: 502, level: 5, type: 'OOP', text: "Constructor ของ Class", code: "def ____(self):", ans: "__init__", hint: "init มี underscore คู่" },
    { id: 503, level: 5, type: 'OOP', text: "อ้างอิงตัววัตถุเอง", code: "____.hp = 100", ans: "self", hint: "ตัวเอง" },
    { id: 504, level: 5, type: 'ALGO_TRACE', text: "ผลลัพธ์ของ Code นี้คือ?", code: "L = [x for x in range(3)]\nprint(L)", ans: "[0, 1, 2]", hint: "List Comprehension 0 ถึง 2" },
    { id: 505, level: 5, type: 'ALGO_TRACE', text: "ค่าของ result คือ?", code: "def f(x): return x*2\nresult = f(f(2))", ans: "8", hint: "2*2 แล้วเอาผลลัพธ์ *2 อีกที" },
    { id: 506, level: 5, type: 'ALGO_TRACE', text: "ผลลัพธ์การตัดคำ (Split)", code: "'A-B'.split('-')", ans: "['A', 'B']", hint: "ได้ List ของตัวอักษร" },
    { id: 507, level: 5, type: 'LOGIC_HARD', text: "ผลลัพธ์คือ True หรือ False?", code: "print(10 > 5 and not False)", ans: "True", hint: "จริง และ (ไม่เท็จ)" },
    { id: 508, level: 5, type: 'ALGO_TRACE', text: "Index ตัวสุดท้ายของ List", code: "L = [10, 20, 30]\nprint(L[____])", ans: "-1", hint: "นับจากข้างหลัง" }
];