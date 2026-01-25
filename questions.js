const QUESTION_DATABASE = [
    // ==========================================
    // LEVEL 1: BASIC SYNTAX
    // ==========================================
    { 
        id: 101, level: 1, type: 'SYNTAX', 
        text: "คำสั่งแสดงผลทางหน้าจอ", code: "____('System Ready')", ans: "print", 
        hint: "p____", 
        explanation: "คำสั่ง print() ใช้สำหรับแสดงผลข้อความหรือค่าตัวแปรออกทางหน้าจอ Console" 
    },
    { 
        id: 102, level: 1, type: 'SYNTAX', 
        text: "แปลงข้อมูลเป็นจำนวนเต็ม", code: "x = ____('10')", ans: "int", 
        hint: "integer", 
        explanation: "int() เป็นฟังก์ชันสำหรับแปลงข้อมูลชนิดอื่น (เช่น String หรือ Float) ให้กลายเป็นจำนวนเต็ม (Integer)" 
    },
    { 
        id: 103, level: 1, type: 'SYNTAX', 
        text: "รับค่าจากผู้ใช้ (User Input)", code: "name = ____('Enter Name:')", ans: "input", 
        hint: "ตรงข้าม output", 
        explanation: "input() ใช้รับข้อมูลที่ผู้ใช้พิมพ์ผ่านคีย์บอร์ด โดยค่าที่ได้จะเป็น String เสมอ" 
    },
    { 
        id: 104, level: 1, type: 'SYNTAX', 
        text: "เช็คชนิดข้อมูล (Check Type)", code: "print(____(3.14))", ans: "type", 
        hint: "ชนิด", 
        explanation: "type() ใช้ตรวจสอบว่าตัวแปรนั้นเป็นข้อมูลชนิดอะไร (เช่น int, float, str, list)" 
    },
    { 
        id: 105, level: 1, type: 'SYNTAX', 
        text: "แปลงเป็นข้อความ (String)", code: "msg = 'Level ' + ____(5)", ans: "str", 
        hint: "string", 
        explanation: "str() ใช้แปลงตัวเลขหรือข้อมูลอื่นให้เป็นข้อความ เพื่อให้นำมาเชื่อม (Concatenate) กับข้อความอื่นได้" 
    },
    { 
        id: 106, level: 1, type: 'SYNTAX', 
        text: "ค่าความจริง (Boolean) เท็จ", code: "flag = ____", ans: "False", 
        hint: "ตรงข้าม True", 
        explanation: "ใน Python ค่าความจริงมี 2 ค่า คือ True (จริง) และ False (เท็จ) ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่เสมอ" 
    },
    { 
        id: 107, level: 1, type: 'SYNTAX', 
        text: "ตัวดำเนินการทางตรรกะ 'และ'", code: "if A ____ B:", ans: "and", 
        hint: "และ", 
        explanation: "and จะให้ผลเป็น True ก็ต่อเมื่อเงื่อนไขทั้งซ้ายและขวาเป็นจริงทั้งคู่" 
    },
    { 
        id: 108, level: 1, type: 'SYNTAX', 
        text: "ตัวดำเนินการทางตรรกะ 'หรือ'", code: "if A ____ B:", ans: "or", 
        hint: "หรือ", 
        explanation: "or จะให้ผลเป็น True ถ้ามีเงื่อนไขใดเงื่อนไขหนึ่งเป็นจริง" 
    },

    // ==========================================
    // LEVEL 2: LOGIC & CONDITIONS
    // ==========================================
    { 
        id: 201, level: 2, type: 'LOGIC', 
        text: "ตรวจสอบความเท่ากัน", code: "if x ____ 10:", ans: "==", 
        hint: "เท่ากับ 2 ตัว", 
        explanation: "เครื่องหมาย == ใช้เปรียบเทียบว่าค่าทางซ้ายและขวาเท่ากันหรือไม่ (ระวังสับสนกับ = ที่ใช้กำหนดค่า)" 
    },
    { 
        id: 202, level: 2, type: 'LOGIC', 
        text: "ตรวจสอบว่า 'ไม่เท่ากับ'", code: "if x ____ 0:", ans: "!=", 
        hint: "ตกใจ + เท่ากับ", 
        explanation: "เครื่องหมาย != หมายถึง 'ไม่เท่ากับ' ใช้เช็คว่าค่าสองค่าแตกต่างกันหรือไม่" 
    },
    { 
        id: 203, level: 2, type: 'LOGIC', 
        text: "เงื่อนไขทางเลือก (Else If)", code: "____ x > 5:", ans: "elif", 
        hint: "ย่อมาจาก Else If", 
        explanation: "elif ใช้ตรวจสอบเงื่อนไขรองลงมา เมื่อเงื่อนไข if ก่อนหน้าเป็นเท็จ" 
    },
    { 
        id: 204, level: 2, type: 'LOGIC', 
        text: "กรณีไม่เข้าเงื่อนไขใดเลย", code: "____:", ans: "else", 
        hint: "มิฉะนั้น", 
        explanation: "else จะทำงานเมื่อเงื่อนไขทั้งหมดก่อนหน้านี้เป็นเท็จ (ไม่ต้องมีเงื่อนไขต่อท้าย)" 
    },
    { 
        id: 205, level: 2, type: 'LOGIC', 
        text: "ผลลัพธ์ของ 10 หารเอาเศษ 3", code: "print(10 ____ 3)", ans: "%", 
        hint: "Modulo Symbol", 
        explanation: "% (Modulo) คือการหารเอาเศษ เช่น 10 หาร 3 ได้ 3 เศษ 1 ดังนั้นคำตอบคือ 1" 
    },
    { 
        id: 206, level: 2, type: 'LOGIC', 
        text: "ผลลัพธ์: True or False?", code: "print(not True)", ans: "False", 
        hint: "ตรงข้าม True", 
        explanation: "not คือนิเสธ ใช้กลับค่าความจริง จาก True เป็น False และจาก False เป็น True" 
    },
    { 
        id: 207, level: 2, type: 'LOGIC', 
        text: "ผลลัพธ์ของ 2 ยกกำลัง 3", code: "print(2 ____ 3)", ans: "**", 
        hint: "คูณ 2 ครั้ง", 
        explanation: "** คือเครื่องหมายยกกำลัง ในที่นี้คือ 2 ยกกำลัง 3 = 8" 
    },
    { 
        id: 208, level: 2, type: 'LOGIC', 
        text: "x มีค่าเท่าไหร่?", code: "x = 10; x += 5", ans: "15", 
        hint: "10 บวก 5", 
        explanation: "x += 5 มีความหมายเดียวกับ x = x + 5 คือการนำค่าเดิมบวกเพิ่มเข้าไปอีก 5" 
    },

    // ==========================================
    // LEVEL 3: LOOPS & PATTERNS
    // ==========================================
    { 
        id: 301, level: 3, type: 'PATTERN', 
        text: "สร้างช่วงตัวเลข 0,1,2,3,4", code: "for i in ____(5):", ans: "range", 
        hint: "ระยะ/ช่วง", 
        explanation: "range(5) จะสร้างลำดับตัวเลขตั้งแต่ 0 ถึง 4 (จำนวน 5 ตัว) นิยมใช้กับ for loop" 
    },
    { 
        id: 302, level: 3, type: 'ALGO', 
        text: "วนซ้ำตราบเท่าที่เงื่อนไขเป็นจริง", code: "____ hp > 0:", ans: "while", 
        hint: "ขณะที่", 
        explanation: "while loop จะทำงานซ้ำไปเรื่อยๆ ตราบใดที่เงื่อนไขข้างหลังยังเป็น True" 
    },
    { 
        id: 303, level: 3, type: 'ALGO', 
        text: "สั่งหยุดการทำงานของ Loop ทันที", code: "if dead: ____", ans: "break", 
        hint: "เบรค/หยุด", 
        explanation: "break ใช้สั่งจบการทำงานของ Loop ทันที ไม่ว่าเงื่อนไข Loop จะยังเป็นจริงอยู่หรือไม่ก็ตาม" 
    },
    { 
        id: 304, level: 3, type: 'ALGO', 
        text: "ข้ามรอบนี้ไปรอบถัดไป", code: "if safe: ____", ans: "continue", 
        hint: "ไปต่อ", 
        explanation: "continue จะข้ามการทำงานส่วนที่เหลือในรอบนั้น แล้วกระโดดไปเริ่มรอบถัดไปทันที" 
    },
    { 
        id: 305, level: 3, type: 'PATTERN', 
        text: "หาความยาวของ List", code: "size = ____(my_list)", ans: "len", 
        hint: "length", 
        explanation: "len() ย่อมาจาก length ใช้สำหรับนับจำนวนสมาชิกใน List หรือจำนวนตัวอักษรใน String" 
    },
    { 
        id: 306, level: 3, type: 'ALGO', 
        text: "ผลลัพธ์สุดท้ายของ x", code: "x=0\nfor i in range(3): x+=1", ans: "3", 
        hint: "บวกทีละ 1 สามครั้ง", 
        explanation: "Loop ทำงาน 3 รอบ (i=0,1,2) แต่ละรอบบวก x เพิ่ม 1 ดังนั้น 0+1+1+1 = 3" 
    },
    { 
        id: 307, level: 3, type: 'PATTERN', 
        text: "เริ่ม Loop จาก 1 ถึง 10", code: "range(1, ____)", ans: "11", 
        hint: "ตัวจบต้อง +1", 
        explanation: "range(start, stop) ตัว stop จะไม่ถูกรวม ดังนั้นถ้าต้องการถึง 10 ต้องใส่ stop เป็น 11" 
    },
    { 
        id: 308, level: 3, type: 'ALGO', 
        text: "Loop ทำงานกี่รอบ?", code: "for i in range(2, 5):", ans: "3", 
        hint: "2, 3, 4", 
        explanation: "เริ่มที่ 2 จบก่อน 5 คือได้เลข 2, 3, 4 รวมทั้งหมด 3 รอบ" 
    },

    // ==========================================
    // LEVEL 4: DATA STRUCTURES & FUNCTIONS
    // ==========================================
    { 
        id: 401, level: 4, type: 'DATA', 
        text: "เพิ่มข้อมูลต่อท้าย List", code: "items.____('Sword')", ans: "append", 
        hint: "ภาษาอังกฤษแปลว่าแนบท้าย", 
        explanation: ".append() เป็น Method ของ List ใช้สำหรับเพิ่มข้อมูลใหม่เข้าไปต่อท้ายสุดของ List" 
    },
    { 
        id: 402, level: 4, type: 'DATA', 
        text: "ลบข้อมูลออกจาก List", code: "items.____('Trash')", ans: "remove", 
        hint: "เอาออก", 
        explanation: ".remove(x) จะค้นหา x ตัวแรกที่เจอใน List แล้วลบออก" 
    },
    { 
        id: 403, level: 4, type: 'DATA', 
        text: "เรียงลำดับข้อมูลใน List", code: "scores.____()", ans: "sort", 
        hint: "จัดเรียง", 
        explanation: ".sort() จะเรียงลำดับข้อมูลใน List จากน้อยไปมาก (ถ้าเป็นตัวเลข) หรือตามตัวอักษร" 
    },
    { 
        id: 404, level: 4, type: 'ABSTRACTION', 
        text: "ประกาศฟังก์ชัน (Define)", code: "____ attack():", ans: "def", 
        hint: "ย่อจาก define", 
        explanation: "def ใช้ประกาศสร้างฟังก์ชันใหม่ ตามด้วยชื่อฟังก์ชันและเครื่องหมาย ()" 
    },
    { 
        id: 405, level: 4, type: 'ABSTRACTION', 
        text: "ส่งค่าคืนจากฟังก์ชัน", code: "____ damage", ans: "return", 
        hint: "ย้อนกลับ", 
        explanation: "return ใช้ส่งค่าผลลัพธ์ออกจากฟังก์ชันเพื่อนำไปใช้ต่อ และเป็นการจบการทำงานของฟังก์ชันนั้นด้วย" 
    },
    { 
        id: 406, level: 4, type: 'DATA', 
        text: "เข้าถึง Value ใน Dictionary", code: "data.____('key')", ans: "get", 
        hint: "ดึงค่า", 
        explanation: ".get('key') ใช้ดึงข้อมูลจาก Dictionary ข้อดีคือถ้าไม่เจอ Key จะไม่ Error แต่คืนค่า None แทน" 
    },
    { 
        id: 407, level: 4, type: 'LIBRARY', 
        text: "นำเข้าโมดูลภายนอก", code: "____ math", ans: "import", 
        hint: "นำเข้า", 
        explanation: "import ใช้ดึง Library หรือ Module อื่นๆ เข้ามาใช้งานในโปรแกรม เช่น math, random" 
    },
    { 
        id: 408, level: 4, type: 'LIBRARY', 
        text: "สุ่มตัวเลขจำนวนเต็ม", code: "random.____(1, 100)", ans: "randint", 
        hint: "random + integer", 
        explanation: "randint(a, b) จะสุ่มตัวเลขจำนวนเต็มตั้งแต่ a ถึง b (รวมตัวสุดท้ายด้วย)" 
    },

    // ==========================================
    // LEVEL 5: ALGORITHM TRACING & OOP
    // ==========================================
    { 
        id: 501, level: 5, type: 'OOP', 
        text: "สร้าง Class ใหม่", code: "____ Monster:", ans: "class", 
        hint: "แม่แบบวัตถุ", 
        explanation: "class ใช้สำหรับประกาศสร้างแม่แบบของ Object ซึ่งเป็นหัวใจสำคัญของ OOP" 
    },
    { 
        id: 502, level: 5, type: 'OOP', 
        text: "Constructor ของ Class", code: "def ____(self):", ans: "__init__", 
        hint: "init มี underscore คู่", 
        explanation: "__init__ คือเมธอดพิเศษที่จะทำงานทันทีเมื่อมีการสร้าง Object ใหม่ ใช้สำหรับกำหนดค่าเริ่มต้น" 
    },
    { 
        id: 503, level: 5, type: 'OOP', 
        text: "อ้างอิงตัววัตถุเอง", code: "____.hp = 100", ans: "self", 
        hint: "ตัวเอง", 
        explanation: "self เป็นตัวแปรที่ใช้แทนตัว Object นั้นๆ เพื่อให้ Method สามารถเข้าถึง Attribute ของตัวเองได้" 
    },
    { 
        id: 504, level: 5, type: 'ALGO_TRACE', 
        text: "ผลลัพธ์ของ Code นี้คือ?", code: "L = [x for x in range(3)]\nprint(L)", ans: "[0, 1, 2]", 
        hint: "List Comprehension 0 ถึง 2", 
        explanation: "นี่คือ List Comprehension สร้าง List จาก range(3) ซึ่งจะได้ [0, 1, 2]" 
    },
    { 
        id: 505, level: 5, type: 'ALGO_TRACE', 
        text: "ค่าของ result คือ?", code: "def f(x): return x*2\nresult = f(f(2))", ans: "8", 
        hint: "2*2 แล้วเอาผลลัพธ์ *2 อีกที", 
        explanation: "f(2) ได้ 4 จากนั้นเอา 4 ไปเข้า f(4) อีกรอบ จะได้ 4*2 = 8" 
    },
    { 
        id: 506, level: 5, type: 'ALGO_TRACE', 
        text: "ผลลัพธ์การตัดคำ (Split)", code: "'A-B'.split('-')", ans: "['A', 'B']", 
        hint: "ได้ List ของตัวอักษร", 
        explanation: ".split('-') จะตัดข้อความโดยใช้เครื่องหมาย - เป็นตัวคั่น ผลลัพธ์ที่ได้จะเป็น List" 
    },
    { 
        id: 507, level: 5, type: 'LOGIC_HARD', 
        text: "ผลลัพธ์คือ True หรือ False?", code: "print(10 > 5 and not False)", ans: "True", 
        hint: "จริง และ (ไม่เท็จ)", 
        explanation: "10 > 5 เป็น True, not False เป็น True. ดังนั้น True and True จึงได้ผลลัพธ์เป็น True" 
    },
    { 
        id: 508, level: 5, type: 'ALGO_TRACE', 
        text: "Index ตัวสุดท้ายของ List", code: "L = [10, 20, 30]\nprint(L[____])", ans: "-1", 
        hint: "นับจากข้างหลัง", 
        explanation: "ใน Python Index -1 หมายถึงสมาชิกตัวสุดท้ายของ List (ตัวขวาสุด)" 
    }
];