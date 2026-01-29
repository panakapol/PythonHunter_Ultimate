const QUESTION_DATABASE = [
    // ==========================================
    // 1. BASICS (พื้นฐาน & ตัวแปร)
    // ==========================================
    { id: 101, mode: 'BASICS', level: 1, text: "คำสั่งแสดงผลข้อความออกหน้าจอ", code: "____('Hello World')", ans: "print", explanation: "print() เป็นฟังก์ชันพื้นฐานที่สุด ใช้สำหรับแสดงข้อมูล (Output) ออกทางหน้าจอ Console" },
    { id: 102, mode: 'BASICS', level: 1, text: "รับค่าจากผู้ใช้งาน (Keyboard)", code: "name = ____('Enter Name:')", ans: "input", explanation: "input() จะหยุดโปรแกรมเพื่อรอรับข้อมูลจากผู้ใช้ โดยค่าที่ได้จะเป็นข้อความ (String) เสมอ" },
    { id: 103, mode: 'BASICS', level: 1, text: "แปลงข้อความให้เป็นจำนวนเต็ม", code: "score = ____('50')", ans: "int", explanation: "int() (Integer) ใช้แปลงข้อมูลชนิดอื่น เช่น String '50' หรือ Float 50.5 ให้เป็นจำนวนเต็ม" },
    { id: 104, mode: 'BASICS', level: 1, text: "แปลงตัวเลขให้เป็นข้อความ", code: "msg = 'Age: ' + ____(20)", ans: "str", explanation: "str() (String) ใช้แปลงตัวเลขให้เป็นข้อความ เพื่อให้นำไปเชื่อม (Concatenate) กับข้อความอื่นได้" },
    { id: 105, mode: 'BASICS', level: 1, text: "ตรวจสอบชนิดของตัวแปร", code: "____(3.14)", ans: "type", explanation: "type() ใช้เช็คว่าตัวแปรนั้นเป็นข้อมูลชนิดอะไร เช่น <class 'float'> หรือ <class 'int'>" },
    { id: 106, mode: 'BASICS', level: 1, text: "ตัวเลขทศนิยมเรียกว่าอะไร", code: "price = 99.5  # เป็นข้อมูลชนิด ____", ans: "float", explanation: "float (Floating Point) คือชนิดข้อมูลสำหรับเก็บตัวเลขที่มีทศนิยม" },
    { id: 107, mode: 'BASICS', level: 1, text: "ค่าความจริง 'เท็จ' ใน Python", code: "is_active = ____", ans: "False", explanation: "Boolean ใน Python มีแค่ True กับ False (ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่เสมอ)" },
    { id: 108, mode: 'BASICS', level: 1, text: "ค่าความจริง 'จริง' ใน Python", code: "is_ready = ____", ans: "True", explanation: "ต้องใช้ True ตัวพิมพ์ใหญ่เท่านั้น (ไม่ใช่ true หรือ TRUE)" },
    { id: 109, mode: 'BASICS', level: 1, text: "สัญลักษณ์ Comment (ไม่ประมวลผล)", code: "____ This is a comment", ans: "#", explanation: "เครื่องหมาย # (Hash/Sharp) ใช้สำหรับเขียนคำอธิบายโค้ด โปรแกรมจะข้ามบรรทัดนี้ไป" },
    { id: 110, mode: 'BASICS', level: 1, text: "การลบตัวแปรออกจากหน่วยความจำ", code: "____ my_var", ans: "del", explanation: "del เป็นคำสั่งสำหรับลบตัวแปร หรือลบสมาชิกใน List ทิ้งไป" },

    // ==========================================
    // 2. LOGIC (ตรรกะ & เงื่อนไข)
    // ==========================================
    { id: 201, mode: 'LOGIC', level: 2, text: "คำสั่งตรวจสอบเงื่อนไข (ถ้า...)", code: "____ x > 10:", ans: "if", explanation: "if ใช้สร้างเงื่อนไข ถ้าผลลัพธ์เป็น True จะทำงานในบล็อกคำสั่งนั้น" },
    { id: 202, mode: 'LOGIC', level: 2, text: "เงื่อนไขทางเลือก (ถ้าไม่จริง ให้เช็คต่อ...)", code: "____ x > 5:", ans: "elif", explanation: "elif (Else If) จะทำงานก็ต่อเมื่อ if ก่อนหน้าเป็นเท็จ และเงื่อนไขของตัวมันเองเป็นจริง" },
    { id: 203, mode: 'LOGIC', level: 2, text: "กรณีสุดท้าย (ถ้าไม่เข้าเงื่อนไขใดเลย)", code: "____:", ans: "else", explanation: "else จะทำงานเมื่อทุกเงื่อนไข (if, elif) ก่อนหน้านี้เป็นเท็จทั้งหมด" },
    { id: 204, mode: 'LOGIC', level: 2, text: "เครื่องหมายเปรียบเทียบ 'เท่ากับ'", code: "if password ____ '1234':", ans: "==", explanation: "== คือการเปรียบเทียบความเท่ากัน (ห้ามสับสนกับ = ที่ใช้กำหนดค่า)" },
    { id: 205, mode: 'LOGIC', level: 2, text: "เครื่องหมายเปรียบเทียบ 'ไม่เท่ากับ'", code: "if status ____ 'offline':", ans: "!=", explanation: "!= หมายถึง ไม่เท่ากับ (Not Equal)" },
    { id: 206, mode: 'LOGIC', level: 2, text: "ตรรกะ 'และ' (ต้องจริงทั้งคู่)", code: "if has_key ____ level > 5:", ans: "and", explanation: "and จะให้ผลลัพธ์เป็น True เฉพาะเมื่อทั้งสองฝั่งเป็นจริง" },
    { id: 207, mode: 'LOGIC', level: 2, text: "ตรรกะ 'หรือ' (อันใดอันหนึ่งจริง)", code: "if role == 'admin' ____ score > 90:", ans: "or", explanation: "or จะให้ผลลัพธ์เป็น True ถ้ามีฝั่งใดฝั่งหนึ่งเป็นจริง" },
    { id: 208, mode: 'LOGIC', level: 2, text: "กลับค่าความจริง (จริงเป็นเท็จ)", code: "if ____ is_empty:", ans: "not", explanation: "not ใช้กลับค่า Boolean เช่น not True ได้ False" },
    { id: 209, mode: 'LOGIC', level: 2, text: "เช็คว่าเป็นสมาชิกในกลุ่มหรือไม่", code: "if 'a' ____ ['a','b','c']:", ans: "in", explanation: "in ใช้ตรวจสอบว่าค่าทางซ้าย อยู่ใน Sequence ทางขวาหรือไม่" },
    { id: 210, mode: 'LOGIC', level: 2, text: "เครื่องหมายมากกว่าหรือเท่ากับ", code: "if age ____ 18:", ans: ">=", explanation: ">= หมายถึง มากกว่าหรือเท่ากับ" },

    // ==========================================
    // 3. LOOPS (การวนซ้ำ)
    // ==========================================
    { id: 301, mode: 'LOOPS', level: 3, text: "วนซ้ำแบบรู้จำนวนรอบ", code: "____ i in range(10):", ans: "for", explanation: "for loop ใช้สำหรับวนซ้ำข้อมูลใน Sequence หรือตามจำนวนรอบที่แน่นอน" },
    { id: 302, mode: 'LOOPS', level: 3, text: "สร้างชุดตัวเลข 0 ถึง 4", code: "for i in ____(5):", ans: "range", explanation: "range(n) สร้างลำดับเลขจำนวนเต็มตั้งแต่ 0 ถึง n-1" },
    { id: 303, mode: 'LOOPS', level: 3, text: "วนซ้ำตราบเท่าที่เงื่อนไขเป็นจริง", code: "____ hp > 0:", ans: "while", explanation: "while loop จะทำงานวนซ้ำไปเรื่อยๆ ตราบใดที่เงื่อนไขยังคงเป็น True" },
    { id: 304, mode: 'LOOPS', level: 3, text: "หยุดการทำงานของ Loop ทันที", code: "if dead: ____", ans: "break", explanation: "break ใช้ดีดตัวออกจาก Loop ทันที (จบการวนซ้ำ)" },
    { id: 305, mode: 'LOOPS', level: 3, text: "ข้ามรอบนี้ ไปเริ่มรอบถัดไป", code: "if skip: ____", ans: "continue", explanation: "continue จะข้ามโค้ดที่เหลือ แล้วกลับไปเริ่มรอบใหม่ทันที" },
    { id: 306, mode: 'LOOPS', level: 3, text: "วนซ้ำทีละตัวอักษรในข้อความ", code: "for char ____ 'Python':", ans: "in", explanation: "in ใช้ระบุว่าจะวนซ้ำในข้อมูลชุดไหน (String ก็วนซ้ำได้ทีละตัวอักษร)" },
    { id: 307, mode: 'LOOPS', level: 3, text: "range(Start, Stop) จะได้ 1,2,3", code: "range(1, ____)", ans: "4", explanation: "ตัวจบ (Stop) จะไม่ถูกรวม ดังนั้นถ้าอยากได้ถึง 3 ต้องใส่ 4" },
    { id: 308, mode: 'LOOPS', level: 3, text: "Loop ซ้อน Loop เรียกว่า", code: "# ____ Loop", ans: "nested", explanation: "Nested Loop คือการที่มี Loop ซ้อนอยู่ภายใน Loop อีกที" },
    { id: 309, mode: 'LOOPS', level: 3, text: "ทำซ้ำจนเป็นนิรันดร์ (ไม่สิ้นสุด)", code: "while ____:", ans: "True", explanation: "while True: คือการสร้าง Infinite Loop ที่ไม่มีวันจบ (ต้องใช้ break เพื่อออก)" },
    { id: 310, mode: 'LOOPS', level: 3, text: "วนซ้ำพร้อมลำดับที่ (Index)", code: "for i, val in ____(['a','b']):", ans: "enumerate", explanation: "enumerate() จะคืนค่าออกมาทั้ง Index และ Value พร้อมกัน" },

    // ==========================================
    // 4. DATA (List & Dictionary)
    // ==========================================
    { id: 401, mode: 'DATA', level: 4, text: "เพิ่มข้อมูลต่อท้าย List", code: "items.____('Sword')", ans: "append", explanation: ".append() ใช้เพิ่มข้อมูลใหม่ไปต่อท้ายสุดของ List" },
    { id: 402, mode: 'DATA', level: 4, text: "หาความยาวของ List", code: "size = ____(my_list)", ans: "len", explanation: "len() ย่อมาจาก length ใช้นับจำนวนสมาชิก" },
    { id: 403, mode: 'DATA', level: 4, text: "ลบข้อมูลออกจาก List โดยระบุค่า", code: "items.____('Trash')", ans: "remove", explanation: ".remove(x) จะลบค่า x ตัวแรกที่พบออกจาก List" },
    { id: 404, mode: 'DATA', level: 4, text: "เรียงลำดับข้อมูลใน List", code: "scores.____()", ans: "sort", explanation: ".sort() เรียงลำดับจากน้อยไปมาก (เปลี่ยนแปลงตัวแปรเดิม)" },
    { id: 405, mode: 'DATA', level: 4, text: "ดึงค่าจาก Dictionary อย่างปลอดภัย", code: "user.____('name')", ans: "get", explanation: ".get() ใช้ดึงค่า Value ถ้าไม่มี Key จะคืนค่า None แทนการ Error" },
    { id: 406, mode: 'DATA', level: 4, text: "ลบข้อมูลตัวสุดท้ายออกจาก List", code: "last_item = items.____()", ans: "pop", explanation: ".pop() จะดึงข้อมูลตัวสุดท้ายออกจาก List และคืนค่านั้นออกมา" },
    { id: 407, mode: 'DATA', level: 4, text: "เข้าถึงข้อมูลตัวแรกของ List", code: "first = my_list[____]", ans: "0", explanation: "Index ของ Python เริ่มต้นที่ 0 เสมอ" },
    { id: 408, mode: 'DATA', level: 4, text: "เข้าถึงข้อมูลตัวสุดท้ายของ List", code: "last = my_list[____]", ans: "-1", explanation: "Index -1 หมายถึงตัวสุดท้าย, -2 คือรองสุดท้าย" },
    { id: 409, mode: 'DATA', level: 4, text: "ดูเฉพาะ Key ทั้งหมดใน Dictionary", code: "k = my_dict.____()", ans: "keys", explanation: ".keys() จะคืนค่า List ของ Key ทั้งหมดใน Dictionary นั้น" },
    { id: 410, mode: 'DATA', level: 4, text: "แทรกข้อมูลลงใน List ตามตำแหน่ง", code: "L.____(0, 'Start')", ans: "insert", explanation: ".insert(index, value) ใช้แทรกข้อมูลลงในตำแหน่งที่ต้องการ" },

    // ==========================================
    // 5. FUNC (ฟังก์ชัน & โมดูล)
    // ==========================================
    { id: 501, mode: 'FUNC', level: 4, text: "คำสั่งประกาศสร้างฟังก์ชัน", code: "____ my_func():", ans: "def", explanation: "def (Define) ใช้สำหรับประกาศฟังก์ชันใหม่" },
    { id: 502, mode: 'FUNC', level: 4, text: "ส่งค่าผลลัพธ์ออกจากฟังก์ชัน", code: "____ total", ans: "return", explanation: "return ใช้ส่งค่ากลับและจบการทำงานของฟังก์ชันทันที" },
    { id: 503, mode: 'FUNC', level: 4, text: "นำเข้าไลบรารีภายนอก", code: "____ random", ans: "import", explanation: "import ใช้โหลด Module อื่นๆ เข้ามาใช้งาน" },
    { id: 504, mode: 'FUNC', level: 4, text: "หาค่าสูงสุด", code: "____(10, 50, 5)", ans: "max", explanation: "max() คืนค่าที่มากที่สุดในกลุ่มข้อมูล" },
    { id: 505, mode: 'FUNC', level: 4, text: "หาค่าต่ำสุด", code: "____(10, 50, 5)", ans: "min", explanation: "min() คืนค่าที่น้อยที่สุดในกลุ่มข้อมูล" },
    { id: 506, mode: 'FUNC', level: 4, text: "หาค่าสัมบูรณ์ (ค่าบวกเสมอ)", code: "____(-50)", ans: "abs", explanation: "abs() (Absolute) เปลี่ยนเลขลบให้เป็นบวก" },
    { id: 507, mode: 'FUNC', level: 4, text: "ปัดเศษทศนิยม", code: "____(3.75)", ans: "round", explanation: "round() ใช้ปัดเศษทศนิยมตามหลักคณิตศาสตร์" },
    { id: 508, mode: 'FUNC', level: 4, text: "สร้างฟังก์ชันแบบไม่คืนค่า (Procedure)", code: "def say_hi(): ____('Hi')", ans: "print", explanation: "ฟังก์ชันอาจจะแค่ print() ค่าเฉยๆ ก็ได้ โดยไม่ต้อง return อะไรกลับมา" },
    { id: 509, mode: 'FUNC', level: 4, text: "เรียกใช้ฟังก์ชัน", code: "my_func____", ans: "()", explanation: "การเรียกใช้ฟังก์ชันต้องมีวงเล็บ () ต่อท้ายเสมอ แม้จะไม่มีพารามิเตอร์" },
    { id: 510, mode: 'FUNC', level: 4, text: "ตั้งชื่อเล่นให้โมดูล", code: "import numpy ____ np", ans: "as", explanation: "as ใช้ตั้งชื่อย่อ (Alias) ให้กับโมดูลเพื่อเรียกใช้งานง่ายขึ้น" },

    // ==========================================
    // 6. OOP (การเขียนโปรแกรมเชิงวัตถุ)
    // ==========================================
    { id: 601, mode: 'OOP', level: 5, text: "สร้างแม่แบบวัตถุ (Class)", code: "____ Robot:", ans: "class", explanation: "class ใช้สร้างแม่แบบสำหรับผลิต Object" },
    { id: 602, mode: 'OOP', level: 5, text: "คอนสตรัคเตอร์ (ทำงานเมื่อเริ่ม)", code: "def ____(self):", ans: "__init__", explanation: "__init__ คือเมธอดพิเศษที่จะทำงานทันทีที่สร้าง Object ใหม่" },
    { id: 603, mode: 'OOP', level: 5, text: "ตัวแปรแทนตัวเองใน Class", code: "____.name = 'Bot1'", ans: "self", explanation: "self ใช้ระบุว่าเป็นตัวแปรของ Object ตัวนี้ ไม่ใช่ตัวแปรทั่วไป" },
    { id: 604, mode: 'OOP', level: 5, text: "สร้าง Object ใหม่จาก Class", code: "my_bot = ____()", ans: "Robot", explanation: "การสร้าง Object (Instantiate) ทำโดยการเรียกชื่อ Class เหมือนฟังก์ชัน" },
    { id: 605, mode: 'OOP', level: 5, text: "การสืบทอดคุณสมบัติ (Inheritance)", code: "class Car(____):", ans: "Vehicle", explanation: "ใส่ชื่อ Class แม่ในวงเล็บ เพื่อให้ Class ลูกสืบทอดคุณสมบัติมา" },
    { id: 606, mode: 'OOP', level: 5, text: "ฟังก์ชันภายใน Class เรียกว่า", code: "# It is a ____", ans: "method", explanation: "Method คือฟังก์ชันที่ประกาศอยู่ภายใน Class" },
    { id: 607, mode: 'OOP', level: 5, text: "เข้าถึง Attribute ของ Object", code: "print(player____hp)", ans: "." , explanation: "ใช้จุด (.) เพื่อเข้าถึงตัวแปรหรือเมธอดข้างใน Object (Dot Notation)"},
    { id: 608, mode: 'OOP', level: 5, text: "เช็คว่าเป็น Object ของ Class ไหน", code: "____(p1, Player)", ans: "isinstance", explanation: "isinstance(obj, class) ใช้เช็คว่า Object นี้สร้างมาจาก Class นี้หรือไม่" },
    { id: 609, mode: 'OOP', level: 5, text: "Method ที่แปลง Object เป็น String", code: "def ____(self):", ans: "__str__", explanation: "__str__ ใช้กำหนดว่าจะแสดงผลอย่างไรเมื่อสั่ง print(object)" },
    { id: 610, mode: 'OOP', level: 5, text: "Keyword สำหรับไม่ทำอะไรเลย", code: "class Empty: ____", ans: "pass", explanation: "pass ใช้เขียนไว้กัน Error เมื่อเราประกาศ Class หรือ Function เปล่าๆ ไว้ก่อน" }
];