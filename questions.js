const QUESTION_DATABASE = [
    // ==========================================
    // 1. BASICS (พื้นฐาน & ตัวแปร) - Level 1
    // ==========================================
    { id: 101, mode: 'BASICS', level: 1, text: "คำสั่งแสดงผลข้อความออกหน้าจอ", code: "____('Hello World')", ans: "print", explanation: "print() ใช้แสดงผลข้อมูลออกหน้าจอ" },
    { id: 102, mode: 'BASICS', level: 1, text: "รับค่าจากผู้ใช้งาน (Keyboard)", code: "name = ____('Enter Name: ')", ans: "input", explanation: "input() รับค่าจากผู้ใช้ และค่าที่ได้จะเป็น string เสมอ" },
    { id: 103, mode: 'BASICS', level: 1, text: "แปลงข้อความให้เป็นจำนวนเต็ม", code: "score = ____('50')", ans: "int", explanation: "int() ใช้แปลงข้อมูลเป็นจำนวนเต็ม" },
    { id: 104, mode: 'BASICS', level: 1, text: "แปลงตัวเลขให้เป็นข้อความ", code: "msg = 'Age: ' + ____(20)", ans: "str", explanation: "str() แปลงตัวเลขเป็นข้อความ เพื่อเชื่อมกับข้อความอื่น" },
    { id: 105, mode: 'BASICS', level: 1, text: "ตรวจสอบชนิดของตัวแปร", code: "____(3.14)", ans: "type", explanation: "type() ใช้ดูชนิดข้อมูล" },
    { id: 106, mode: 'BASICS', level: 1, text: "ตัวเลขทศนิยมเรียกว่าอะไร", code: "price = 99.5 # เป็นข้อมูลชนิด ____", ans: "float", explanation: "float คือเลขทศนิยม" },
    { id: 107, mode: 'BASICS', level: 1, text: "ค่าความจริง 'เท็จ'", code: "is_active = ____", ans: "False", explanation: "Boolean มี True และ False เท่านั้น (ต้องตัวใหญ่)" },
    { id: 108, mode: 'BASICS', level: 1, text: "ค่าความจริง 'จริง'", code: "is_ready = ____", ans: "True", explanation: "ต้องพิมพ์ตัวใหญ่เท่านั้น" },
    { id: 109, mode: 'BASICS', level: 1, text: "สัญลักษณ์ Comment", code: "____ This is a comment", ans: "#", explanation: "# ใช้เขียน comment อธิบายโค้ดโดยไม่ให้โปรแกรมทำงาน" },
    { id: 110, mode: 'BASICS', level: 1, text: "ลบตัวแปร", code: "____ my_var", ans: "del", explanation: "del ใช้ลบตัวแปรออกจากหน่วยความจำ" },
    { id: 111, mode: 'BASICS', level: 1, text: "กำหนดค่าตัวแปร", code: "x ____ 10", ans: "=", explanation: "= ใช้กำหนดค่าให้ตัวแปร" },
    { id: 112, mode: 'BASICS', level: 1, text: "บวกเลข", code: "5 ____ 3", ans: "+", explanation: "+ ใช้บวก" },
    { id: 113, mode: 'BASICS', level: 1, text: "ลบเลข", code: "10 ____ 4", ans: "-", explanation: "- ใช้ลบ" },
    { id: 114, mode: 'BASICS', level: 1, text: "คูณเลข", code: "6 ____ 2", ans: "*", explanation: "* ใช้คูณ" },
    { id: 115, mode: 'BASICS', level: 1, text: "หารเลข", code: "8 ____ 2", ans: "/", explanation: "/ ใช้หาร" },
    { id: 116, mode: 'BASICS', level: 1, text: "หารเอาเฉพาะจำนวนเต็ม", code: "9 ____ 2", ans: "//", explanation: "// หารแบบปัดเศษทิ้ง" },
    { id: 117, mode: 'BASICS', level: 1, text: "หาเศษจากการหาร", code: "10 ____ 3", ans: "%", explanation: "% คือ modulo (หาเศษจากการหาร)" },
    { id: 118, mode: 'BASICS', level: 1, text: "ยกกำลัง", code: "2 ____ 3", ans: "**", explanation: "** คือยกกำลัง" },
    { id: 119, mode: 'BASICS', level: 1, text: "แปลงเป็นทศนิยม", code: "price = ____(10)", ans: "float", explanation: "แปลง int เป็น float" },
    { id: 120, mode: 'BASICS', level: 1, text: "รับค่าตัวเลขจากผู้ใช้แล้วแปลงทันที", code: "age = ____(input('Age: '))", ans: "int", explanation: "ต้องแปลงเป็น int ก่อนใช้งานทางคณิตศาสตร์" },

    // ==========================================
    // 2. LOGIC (ตรรกะ & เงื่อนไข) - Level 2
    // ==========================================
    { id: 221, mode: 'LOGIC', level: 2, text: "คำสั่งตรวจสอบเงื่อนไข (ถ้า...)", code: "____ x > 10:", ans: "if", explanation: "if ใช้สร้างเงื่อนไข ถ้าเงื่อนไขเป็น True โค้ดด้านในจะทำงาน" },
    { id: 222, mode: 'LOGIC', level: 2, text: "เงื่อนไขทางเลือกเพิ่มเติม", code: "____ x > 5:", ans: "elif", explanation: "elif จะถูกตรวจสอบเมื่อ if ก่อนหน้าเป็น False" },
    { id: 223, mode: 'LOGIC', level: 2, text: "กรณีสุดท้าย", code: "____:", ans: "else", explanation: "else ทำงานเมื่อทุก if และ elif ก่อนหน้าเป็น False" },
    { id: 224, mode: 'LOGIC', level: 2, text: "เครื่องหมายเปรียบเทียบ “เท่ากับ”", code: "if password ____ '1234':", ans: "==", explanation: "== ใช้เปรียบเทียบค่า ห้ามสับสนกับ = ที่ใช้กำหนดค่า" },
    { id: 225, mode: 'LOGIC', level: 2, text: "เครื่องหมาย “ไม่เท่ากับ”", code: "if status ____ 'offline':", ans: "!=", explanation: "!= หมายถึง Not Equal" },
    { id: 226, mode: 'LOGIC', level: 2, text: "เครื่องหมาย “มากกว่า”", code: "if score ____ 80:", ans: ">", explanation: "> ใช้เปรียบเทียบค่ามากกว่า" },
    { id: 227, mode: 'LOGIC', level: 2, text: "เครื่องหมาย “น้อยกว่า”", code: "if score ____ 50:", ans: "<", explanation: "< ใช้เปรียบเทียบค่าน้อยกว่า" },
    { id: 228, mode: 'LOGIC', level: 2, text: "มากกว่าหรือเท่ากับ", code: "if age ____ 18:", ans: ">=", explanation: ">= หมายถึง มากกว่าหรือเท่ากับ" },
    { id: 229, mode: 'LOGIC', level: 2, text: "น้อยกว่าหรือเท่ากับ", code: "if score ____ 60:", ans: "<=", explanation: "<= หมายถึง น้อยกว่าหรือเท่ากับ" },
    { id: 230, mode: 'LOGIC', level: 2, text: "ตรรกะ 'และ'", code: "if has_key ____ level > 5:", ans: "and", explanation: "and จะให้ผล True ก็ต่อเมื่อทั้งสองเงื่อนไขเป็นจริง" },
    { id: 231, mode: 'LOGIC', level: 2, text: "ตรรกะ 'หรือ'", code: "if role == 'admin' ____ score > 90:", ans: "or", explanation: "or ให้ผล True หากมีเงื่อนไขใดเงื่อนไขหนึ่งเป็นจริง" },
    { id: 232, mode: 'LOGIC', level: 2, text: "กลับค่าความจริง", code: "if ____ is_empty:", ans: "not", explanation: "not ใช้กลับค่าบูลีนจาก True เป็น False หรือตรงข้าม" },
    { id: 233, mode: 'LOGIC', level: 2, text: "ตรวจสอบว่าเป็นสมาชิกในกลุ่ม", code: "if 'a' ____ ['a','b','c']:", ans: "in", explanation: "in ใช้ตรวจสอบสมาชิกใน sequence" },
    { id: 234, mode: 'LOGIC', level: 2, text: "ตรวจสอบว่า “ไม่อยู่” ในกลุ่ม", code: "if 'x' ____ ['a','b']:", ans: "not in", explanation: "not in ใช้ตรวจสอบว่าไม่มีค่านั้นอยู่" },
    { id: 235, mode: 'LOGIC', level: 2, text: "เขียนเงื่อนไขแบบบรรทัดเดียว", code: "result = 'Pass' ____ score >= 50 else 'Fail'", ans: "if", explanation: "เป็นรูปแบบย่อของ if-else (Ternary Operator)" },
    { id: 236, mode: 'LOGIC', level: 2, text: "ตรวจสอบชนิดข้อมูล", code: "____(x, int)", ans: "isinstance", explanation: "isinstance(obj, type) ใช้ตรวจสอบประเภทข้อมูล" },
    { id: 237, mode: 'LOGIC', level: 2, text: "ตรวจสอบว่าเป็น None", code: "if x ____ None:", ans: "is", explanation: "ใช้ is แทน == เมื่อตรวจสอบ None" },
    { id: 238, mode: 'LOGIC', level: 2, text: "ตรวจสอบว่าไม่ใช่ None", code: "if x ____ None:", ans: "is not", explanation: "is not ใช้ตรวจสอบว่าไม่ใช่ None" },
    { id: 239, mode: 'LOGIC', level: 2, text: "ตรวจสอบความยาวมากกว่า 0", code: "if len(name) ____ 0:", ans: ">", explanation: "> ใช้เปรียบเทียบค่ามากกว่า" },
    { id: 240, mode: 'LOGIC', level: 2, text: "เงื่อนไขซ้อน", code: "# ____ condition", ans: "nested", explanation: "nested condition คือเงื่อนไขซ้อนกันหลายชั้น" },

    // ==========================================
    // 3. LOOPS (การวนซ้ำ) - Level 3
    // ==========================================
    { id: 341, mode: 'LOOPS', level: 3, text: "วนซ้ำแบบรู้จำนวนรอบ", code: "____ i in range(10):", ans: "for", explanation: "for ใช้วนซ้ำตามจำนวนหรือข้อมูลในลำดับ" },
    { id: 342, mode: 'LOOPS', level: 3, text: "สร้างชุดตัวเลขตั้งแต่ 0 ถึง 4", code: "for i in ____(5):", ans: "range", explanation: "range(5) จะได้ตัวเลข 0 ถึง 4" },
    { id: 343, mode: 'LOOPS', level: 3, text: "วนซ้ำตราบเท่าที่เงื่อนไขเป็นจริง", code: "____ hp > 0:", ans: "while", explanation: "while จะทำงานซ้ำตราบใดที่เงื่อนไขยังเป็น True" },
    { id: 344, mode: 'LOOPS', level: 3, text: "หยุดการทำงานของลูปทันที", code: "if dead: ____", ans: "break", explanation: "break ใช้ออกจากลูปทันที" },
    { id: 345, mode: 'LOOPS', level: 3, text: "ข้ามรอบปัจจุบัน", code: "if skip: ____", ans: "continue", explanation: "continue จะข้ามไปเริ่มรอบถัดไป" },
    { id: 346, mode: 'LOOPS', level: 3, text: "วนซ้ำทีละตัวอักษรในข้อความ", code: "for char ____ 'Python':", ans: "in", explanation: "in ใช้ระบุลำดับข้อมูลที่ต้องการวน" },
    { id: 347, mode: 'LOOPS', level: 3, text: "range แบบกำหนดจุดเริ่มต้นและจุดสิ้นสุด", code: "range(1, ____)", ans: "4", explanation: "ค่าหยุดจะไม่ถูกรวมในผลลัพธ์ อยากได้ถึง 3 ต้องใส่ 4" },
    { id: 348, mode: 'LOOPS', level: 3, text: "ลูปซ้อนลูป", code: "# ____ Loop", ans: "nested", explanation: "Nested Loop คือการมีลูปซ้อนกัน" },
    { id: 349, mode: 'LOOPS', level: 3, text: "ลูปไม่สิ้นสุด", code: "while ____:", ans: "True", explanation: "while True คือ Infinite Loop" },
    { id: 350, mode: 'LOOPS', level: 3, text: "วนซ้ำพร้อมลำดับที่ (Index)", code: "for i, val in ____(['a','b']):", ans: "enumerate", explanation: "enumerate() คืนค่า index และ value" },
    { id: 351, mode: 'LOOPS', level: 3, text: "เพิ่มค่าทีละหนึ่งในการวนซ้ำ", code: "count ____ 1", ans: "+=", explanation: "+= ใช้เพิ่มค่าเข้าไปในตัวแปรเดิม" },
    { id: 352, mode: 'LOOPS', level: 3, text: "ลดค่าทีละหนึ่ง", code: "count ____ 1", ans: "-=", explanation: "-= ใช้ลดค่าตัวแปร" },
    { id: 353, mode: 'LOOPS', level: 3, text: "คูณสะสมค่า", code: "total ____ i", ans: "*=", explanation: "*= ใช้คูณแล้วเก็บกลับ" },
    { id: 354, mode: 'LOOPS', level: 3, text: "หารสะสมค่า", code: "total ____ i", ans: "/=", explanation: "/= ใช้หารแล้วเก็บกลับ" },
    { id: 355, mode: 'LOOPS', level: 3, text: "วนย้อนกลับ", code: "range(10, 0, ____)", ans: "-1", explanation: "step ติดลบทำให้ลูปนับถอยหลัง" },
    { id: 356, mode: 'LOOPS', level: 3, text: "วนลูป list", code: "for item ____ my_list:", ans: "in", explanation: "in ใช้ระบุลำดับข้อมูล" },
    { id: 357, mode: 'LOOPS', level: 3, text: "ใช้ else กับ loop", code: "____:", ans: "else", explanation: "else จะทำงานเมื่อ loop จบตามปกติโดยไม่มี break" },
    { id: 358, mode: 'LOOPS', level: 3, text: "ตรวจสอบเลขคู่", code: "if i % 2 ____ 0:", ans: "==", explanation: "ถ้าเศษเป็น 0 แสดงว่าเป็นเลขคู่" },
    { id: 359, mode: 'LOOPS', level: 3, text: "break เมื่อเจอค่าที่ต้องการ", code: "if i == 5: ____", ans: "break", explanation: "break ออกจากลูปทันที" },
    { id: 360, mode: 'LOOPS', level: 3, text: "สร้าง list จากลูปแบบย่อ", code: "[x for x ____ range(5)]", ans: "in", explanation: "in ใช้กำหนดแหล่งข้อมูลใน comprehension" },

    // ==========================================
    // 4. DATA (List, Dictionary, Set) - Level 4
    // ==========================================
    { id: 461, mode: 'DATA', level: 4, text: "สร้างลิสต์เก็บข้อมูลหลายค่า", code: "numbers = ____1, 2, 3____", ans: "[]", explanation: "วงเล็บเหลี่ยม [] ใช้สร้าง list ใน Python" },
    { id: 462, mode: 'DATA', level: 4, text: "เข้าถึงข้อมูลตัวแรกของลิสต์", code: "print(nums[____])", ans: "0", explanation: "index เริ่มที่ 0 ดังนั้นตัวแรกคือ index 0" },
    { id: 463, mode: 'DATA', level: 4, text: "เพิ่มข้อมูลเข้า list", code: "nums.____(40)", ans: "append", explanation: "append ใช้เพิ่มข้อมูลต่อท้าย list" },
    { id: 464, mode: 'DATA', level: 4, text: "ลบข้อมูลตัวสุดท้าย", code: "nums.____()", ans: "pop", explanation: "pop() ลบและคืนค่าตัวสุดท้ายของ list" },
    { id: 465, mode: 'DATA', level: 4, text: "หาความยาวของ list", code: "print(____(nums))", ans: "len", explanation: "len ใช้หาความยาวของข้อมูล" },
    { id: 466, mode: 'DATA', level: 4, text: "เรียงลำดับข้อมูล", code: "nums.____()", ans: "sort", explanation: "sort() ใช้เรียงข้อมูลใน list จากน้อยไปมาก" },
    { id: 467, mode: 'DATA', level: 4, text: "กลับลำดับข้อมูล", code: "nums.____()", ans: "reverse", explanation: "reverse() ใช้กลับลำดับสมาชิก" },
    { id: 468, mode: 'DATA', level: 4, text: "ตรวจสอบว่าค่าอยู่ใน list หรือไม่", code: "if 2 ____ nums:", ans: "in", explanation: "in ใช้ตรวจสอบสมาชิกในลำดับข้อมูล" },
    { id: 469, mode: 'DATA', level: 4, text: "สร้าง tuple", code: "t = ____1, 2, 3____", ans: "()", explanation: "วงเล็บกลม () ใช้สร้าง tuple" },
    { id: 470, mode: 'DATA', level: 4, text: "สร้าง dictionary", code: "data = ____'name': 'Ann'____", ans: "{}", explanation: "วงเล็บปีกกา {} ใช้สร้าง dictionary" },
    { id: 471, mode: 'DATA', level: 4, text: "เข้าถึงค่าใน dictionary", code: "print(data['____'])", ans: "name", explanation: "ใช้ key ในวงเล็บเพื่อเข้าถึงค่าใน dict" },
    { id: 472, mode: 'DATA', level: 4, text: "เพิ่ม key ใหม่ใน dictionary", code: "data['____'] = 20", ans: "age", explanation: "สามารถเพิ่ม key ใหม่โดยกำหนดค่าให้ dict" },
    { id: 473, mode: 'DATA', level: 4, text: "ดู key ทั้งหมด", code: "print(data.____())", ans: "keys", explanation: "keys() คืนค่า key ทั้งหมดใน dict" },
    { id: 474, mode: 'DATA', level: 4, text: "ดู value ทั้งหมด", code: "print(data.____())", ans: "values", explanation: "values() คืนค่า value ทั้งหมด" },
    { id: 475, mode: 'DATA', level: 4, text: "วนลูปใน list", code: "____ n in nums:", ans: "for", explanation: "for ใช้วนซ้ำข้อมูลในลำดับ" },
    { id: 476, mode: 'DATA', level: 4, text: "วนลูป dictionary แบบ key และ value", code: "for k,v in data.____():", ans: "items", explanation: "items() คืนค่าเป็นคู่ key,value" },
    { id: 477, mode: 'DATA', level: 4, text: "สร้าง set", code: "s = ____(nums)", ans: "set", explanation: "set ใช้เก็บข้อมูลไม่ซ้ำ" },
    { id: 478, mode: 'DATA', level: 4, text: "เพิ่มข้อมูลใน set", code: "s.____(3)", ans: "add", explanation: "add ใช้เพิ่มข้อมูลใน set" },
    { id: 479, mode: 'DATA', level: 4, text: "รวม list สองชุด", code: "c = a ____ b", ans: "+", explanation: "+ ใช้รวม list สองชุดเข้าด้วยกัน" },
    { id: 480, mode: 'DATA', level: 4, text: "ตรวจสอบ key ใน dictionary", code: "if 'x' ____ data:", ans: "in", explanation: "in ใช้ตรวจสอบ key ใน dictionary" },

    // ==========================================
    // 5. FUNC (ฟังก์ชัน & โมดูล) - Level 4/5
    // ==========================================
    { id: 581, mode: 'FUNC', level: 5, text: "สร้างฟังก์ชันใหม่", code: "____ greet():", ans: "def", explanation: "def ใช้สำหรับประกาศหรือสร้างฟังก์ชันใหม่" },
    { id: 582, mode: 'FUNC', level: 5, text: "เรียกใช้ฟังก์ชัน", code: "____()", ans: "greet", explanation: "การเรียกฟังก์ชันต้องใส่ชื่อฟังก์ชันตามด้วย ()" },
    { id: 583, mode: 'FUNC', level: 5, text: "รับพารามิเตอร์", code: "def greet(____):", ans: "name", explanation: "name คือพารามิเตอร์ที่รับค่าจากภายนอก" },
    { id: 584, mode: 'FUNC', level: 5, text: "ส่งค่ากลับจากฟังก์ชัน", code: "____ a + b", ans: "return", explanation: "return ใช้ส่งค่ากลับจากฟังก์ชัน" },
    { id: 585, mode: 'FUNC', level: 5, text: "ฟังก์ชันมีค่าเริ่มต้น", code: "def greet(name=____):", ans: '"Guest"', explanation: "สามารถกำหนดค่าเริ่มต้นให้พารามิเตอร์ได้" },
    { id: 586, mode: 'FUNC', level: 5, text: "ฟังก์ชันหลายพารามิเตอร์", code: "def add(a____ b):", ans: ",", explanation: "ใช้เครื่องหมาย , คั่นพารามิเตอร์" },
    { id: 587, mode: 'FUNC', level: 5, text: "Import โมดูล", code: "____ math", ans: "import", explanation: "import ใช้เรียกใช้งานโมดูลภายนอก" },
    { id: 588, mode: 'FUNC', level: 5, text: "ใช้ฟังก์ชันจากโมดูล", code: "print(____.sqrt(9))", ans: "math", explanation: "ต้องเรียกผ่านชื่อโมดูล เช่น math.sqrt()" },
    { id: 589, mode: 'FUNC', level: 5, text: "Import แบบย่อชื่อ", code: "import math ____ m", ans: "as", explanation: "as ใช้ตั้งชื่อใหม่ให้โมดูล" },
    { id: 590, mode: 'FUNC', level: 5, text: "ฟังก์ชันไม่คืนค่า", code: "def test(): ____", ans: "pass", explanation: "pass ใช้เมื่อยังไม่ต้องการเขียนโค้ด" },
    { id: 591, mode: 'FUNC', level: 5, text: "ฟังก์ชัน lambda", code: "add = ____ a, b: a+b", ans: "lambda", explanation: "lambda ใช้สร้างฟังก์ชันแบบสั้น" },
    { id: 592, mode: 'FUNC', level: 5, text: "รับค่าหลายค่า (Unpack)", code: "a, b ____ 1, 2", ans: "=", explanation: "Python สามารถ unpack tuple ได้โดยตรงด้วย =" },
    { id: 593, mode: 'FUNC', level: 5, text: "ใช้ *args", code: "def add(____numbers):", ans: "*", explanation: "* ใช้รับค่าหลายตัวแบบ tuple" },
    { id: 594, mode: 'FUNC', level: 5, text: "ใช้ **kwargs", code: "def show(____data):", ans: "**", explanation: "** ใช้รับค่าแบบ dictionary" },
    { id: 595, mode: 'FUNC', level: 5, text: "ตรวจสอบเอกสารฟังก์ชัน", code: "print(____(len))", ans: "help", explanation: "help ใช้ดูคำอธิบายฟังก์ชัน" },
    { id: 596, mode: 'FUNC', level: 5, text: "ใช้ global", code: "____ x", ans: "global", explanation: "global ทำให้แก้ค่าตัวแปรภายนอกได้" },
    { id: 597, mode: 'FUNC', level: 5, text: "ฟังก์ชันซ้อน", code: "____ inner():", ans: "def", explanation: "สามารถประกาศฟังก์ชันภายในฟังก์ชันได้" },
    { id: 598, mode: 'FUNC', level: 5, text: "คืนค่าหลายค่า", code: "return 1 ____ 2", ans: ",", explanation: "ใช้ , เพื่อคืนค่าหลายค่าเป็น tuple" },
    { id: 599, mode: 'FUNC', level: 5, text: "ตรวจสอบชื่อไฟล์หลัก", code: "if ________ == '__main__':", ans: "name", explanation: "__name__ ใช้ตรวจสอบว่าไฟล์ถูกรันโดยตรง" },
    { id: 600, mode: 'FUNC', level: 5, text: "Import ฟังก์ชันเฉพาะ", code: "from math ____ sqrt", ans: "import", explanation: "from ... import ใช้เรียกเฉพาะฟังก์ชันที่ต้องการ" },

    // ==========================================
    // 6. OOP (Object-Oriented Programming) - Level 5
    // ==========================================
    { id: 601, mode: 'OOP', level: 5, text: "สร้างคลาส", code: "____ Person:", ans: "class", explanation: "class ใช้สำหรับสร้างแม่แบบของวัตถุ (object)" },
    { id: 602, mode: 'OOP', level: 5, text: "สร้าง constructor", code: "def ____(self):", ans: "__init__", explanation: "__init__ คือ constructor จะทำงานทันทีเมื่อสร้าง object" },
    { id: 603, mode: 'OOP', level: 5, text: "พารามิเตอร์ self", code: "def greet(____):", ans: "self", explanation: "self ใช้อ้างอิง object ปัจจุบัน" },
    { id: 604, mode: 'OOP', level: 5, text: "สร้าง object จากคลาส", code: "p = ____()", ans: "Person", explanation: "ใช้ชื่อคลาสตามด้วย () เพื่อสร้าง object" },
    { id: 605, mode: 'OOP', level: 5, text: "กำหนด attribute ให้ object", code: "self.____ = name", ans: "name", explanation: "self.name คือ attribute ของ object" },
    { id: 606, mode: 'OOP', level: 5, text: "เรียกใช้ attribute", code: "print(p.____)", ans: "name", explanation: "ใช้ object.attribute เพื่อเข้าถึงข้อมูล" },
    { id: 607, mode: 'OOP', level: 5, text: "เรียกใช้เมธอดในคลาส", code: "p.____()", ans: "greet", explanation: "ใช้ object.method() เพื่อเรียกเมธอด" },
    { id: 608, mode: 'OOP', level: 5, text: "การสืบทอดคลาส (Inheritance)", code: "class Student(____):", ans: "Person", explanation: "Student จะได้รับคุณสมบัติจาก Person" },
    { id: 609, mode: 'OOP', level: 5, text: "เรียก constructor ของคลาสแม่", code: "____().__init__(name)", ans: "super", explanation: "super() ใช้เรียกเมธอดของคลาสแม่" },
    { id: 610, mode: 'OOP', level: 5, text: "เมธอดพิเศษแสดงข้อความ", code: "def ____(self):", ans: "__str__", explanation: "__str__ ใช้กำหนดข้อความเมื่อแปลง object เป็น string" },
    { id: 611, mode: 'OOP', level: 5, text: "ตรวจสอบชนิด object", code: "isinstance(p, ____)", ans: "Person", explanation: "isinstance(obj, ClassName) ใช้ตรวจสอบชนิดของ object ว่าสร้างจากคลาสนั้นหรือไม่" },
    { id: 612, mode: 'OOP', level: 5, text: "กำหนดค่าเริ่มต้นให้ class variable", code: "count = ____", ans: "0", explanation: "class variable เป็นตัวแปรระดับคลาส ใช้ร่วมกันทุก object" },
    { id: 613, mode: 'OOP', level: 5, text: "เมธอดของคลาส", code: "@____", ans: "classmethod", explanation: "@classmethod ใช้สร้างเมธอดระดับคลาส" },
    { id: 614, mode: 'OOP', level: 5, text: "เมธอด static", code: "@____", ans: "staticmethod", explanation: "@staticmethod ไม่ต้องใช้ self หรือ cls" },
    { id: 615, mode: 'OOP', level: 5, text: "สร้าง attribute แบบ private", code: "self.____name = 'Ann'", ans: "__", explanation: "การใส่ขีดล่าง 2 ตัว (__) ทำให้ attribute ถูกซ่อน" },
    { id: 616, mode: 'OOP', level: 5, text: "สร้าง property", code: "@____", ans: "property", explanation: "@property ทำให้เรียกเมธอดเหมือน attribute" },
    { id: 617, mode: 'OOP', level: 5, text: "ตั้งค่า property", code: "@name.____", ans: "setter", explanation: "@name.setter ใช้กำหนดค่าของ property" },
    { id: 618, mode: 'OOP', level: 5, text: "ตรวจสอบการสืบทอดคลาส", code: "issubclass(Student, ____)", ans: "Person", explanation: "issubclass ตรวจสอบว่าคลาสหนึ่งสืบทอดจากอีกคลาสหรือไม่" },
    { id: 619, mode: 'OOP', level: 5, text: "ลบ attribute ของ object", code: "____ p.name", ans: "del", explanation: "del ใช้ลบ attribute หรือ object ออกจากหน่วยความจำ" },
    { id: 620, mode: 'OOP', level: 5, text: "ตรวจสอบว่ามี attribute หรือไม่", code: "hasattr(p, '____')", ans: "name", explanation: "hasattr(object, 'attribute') ใช้ตรวจสอบว่า object มี attribute นั้นหรือไม่" },

    // ==========================================
    // 7. CONTROL FLOW (LOGIC / LOOPS) - ข้อยาก Level 6
    // ==========================================
    { id: 701, mode: 'LOGIC', level: 6, text: "ตรวจสอบเลขคู่และมากกว่า 10", code: "if x % 2 == 0 ____ x > 10:", ans: "and", explanation: "and ใช้เชื่อมเงื่อนไขทั้งสองให้เป็นจริงพร้อมกัน" },
    { id: 702, mode: 'LOGIC', level: 6, text: "ตรวจสอบว่าไม่ใช่ค่าว่าง", code: "if ____ name:", ans: "not", explanation: "not ใช้กลับค่าความจริง เช่น not '' จะได้ True" },
    { id: 703, mode: 'LOOPS', level: 6, text: "วนซ้ำแบบลดค่าถอยหลัง", code: "for i in range(10, 0, ____):", ans: "-2", explanation: "ค่า step ติดลบทำให้ลดค่าลง" },
    { id: 704, mode: 'LOOPS', level: 6, text: "ออกจากลูปเมื่อเจอเลข 7", code: "if i == 7: ____", ans: "break", explanation: "break ทำให้ลูปหยุดทันที" },
    { id: 705, mode: 'LOOPS', level: 6, text: "ข้ามรอบเมื่อเป็นเลขคี่", code: "if i % 2 != 0: ____", ans: "continue", explanation: "continue จะข้ามไปเริ่มรอบถัดไป" },
    { id: 706, mode: 'LOGIC', level: 6, text: "ตรวจสอบชนิดข้อมูล", code: "if ____(x, int):", ans: "isinstance", explanation: "isinstance ใช้ตรวจสอบชนิดข้อมูล" },
    { id: 707, mode: 'LOGIC', level: 6, text: "เงื่อนไขหลายทางเลือก", code: "____ score > 70:", ans: "elif", explanation: "elif ใช้เพิ่มเงื่อนไขเพิ่มเติม" },
    { id: 708, mode: 'LOOPS', level: 6, text: "วนซ้ำข้อมูลใน list", code: "____ item in data:", ans: "for", explanation: "for ใช้วนข้อมูลในลำดับ" },
    { id: 709, mode: 'LOGIC', level: 6, text: "ตรวจสอบค่าในช่วง", code: "if 0 < x ____ x < 100:", ans: "and", explanation: "ต้องใช้ and เชื่อมสองเงื่อนไข" },
    { id: 710, mode: 'LOOPS', level: 6, text: "ลูปไม่สิ้นสุด", code: "while ____:", ans: "True", explanation: "while True ทำให้ลูปไม่สิ้นสุด" },

    // ==========================================
    // 8. FUNCTION - ข้อยาก Level 6
    // ==========================================
    { id: 801, mode: 'FUNC', level: 6, text: "ฟังก์ชันคืนค่าเงื่อนไข", code: "____ x % 2 == 0", ans: "return", explanation: "return ใช้ส่งค่ากลับ" },
    { id: 802, mode: 'FUNC', level: 6, text: "กำหนดค่าเริ่มต้นพารามิเตอร์", code: "def greet(name=____):", ans: '"Guest"', explanation: "กำหนดค่าเริ่มต้นให้พารามิเตอร์" },
    { id: 803, mode: 'FUNC', level: 6, text: "รับค่าหลายตัวแบบไม่จำกัด", code: "def total(____nums):", ans: "*", explanation: "* ใช้รับ argument หลายค่า" },
    { id: 804, mode: 'FUNC', level: 6, text: "ฟังก์ชันแบบไม่คืนค่า", code: "____('Hello')", ans: "print", explanation: "print แสดงผลโดยไม่คืนค่า" },
    { id: 805, mode: 'FUNC', level: 6, text: "คืนค่าหลายค่า", code: "return a ____ b", ans: ",", explanation: "คั่นด้วย comma เพื่อคืนหลายค่า" },
    { id: 806, mode: 'FUNC', level: 6, text: "Lambda expression", code: "square = ____ x: x*x", ans: "lambda", explanation: "lambda ใช้สร้างฟังก์ชันแบบสั้น" },
    { id: 807, mode: 'FUNC', level: 6, text: "เรียกฟังก์ชันภายในฟังก์ชัน", code: "____ inner(x)", ans: "return", explanation: "ต้อง return ค่าที่ได้จาก inner" },
    { id: 808, mode: 'FUNC', level: 6, text: "ตรวจสอบเอกสารอธิบายฟังก์ชัน", code: "____'Example'____", ans: '"""', explanation: '""" ใช้สร้าง docstring' },
    { id: 809, mode: 'FUNC', level: 6, text: "ส่งฟังก์ชันเป็น argument", code: "result = apply(____, 5)", ans: "square", explanation: "ส่งชื่อฟังก์ชันเข้าไปโดยไม่ใส่วงเล็บ" },
    { id: 810, mode: 'FUNC', level: 6, text: "ฟังก์ชัน recursive", code: "return n * ____(n-1)", ans: "fact", explanation: "recursive ต้องเรียกตัวเอง" },

    // ==========================================
    // 9. DATA - ข้อยาก Level 6
    // ==========================================
    { id: 901, mode: 'DATA', level: 6, text: "สร้าง list comprehension", code: "nums = [x*x ____ x in range(5)]", ans: "for", explanation: "for ใช้ใน list comprehension" },
    { id: 902, mode: 'DATA', level: 6, text: "กรองข้อมูลใน comprehension", code: "nums = [x for x in range(10) ____ x % 2 == 0]", ans: "if", explanation: "if ใช้กรองค่า" },
    { id: 903, mode: 'DATA', level: 6, text: "เข้าถึงค่าจาก dictionary", code: "age = data['____']", ans: "age", explanation: "ใช้ key ในการเข้าถึงค่า" },
    { id: 904, mode: 'DATA', level: 6, text: "เพิ่มข้อมูลใน set", code: "s.____(5)", ans: "add", explanation: "add ใช้เพิ่มค่าใน set" },
    { id: 905, mode: 'DATA', level: 6, text: "รวม list สองชุด", code: "new_list = a ____ b", ans: "+", explanation: "+ ใช้รวม list" },
    { id: 906, mode: 'DATA', level: 6, text: "ตรวจสอบสมาชิกใน list", code: "if 5 ____ nums:", ans: "in", explanation: "in ใช้ตรวจสอบสมาชิก" },
    { id: 907, mode: 'DATA', level: 6, text: "เรียงลำดับแบบย้อนกลับ", code: "nums.sort(reverse=____)", ans: "True", explanation: "reverse=True ทำให้เรียงย้อนกลับ" },
    { id: 908, mode: 'DATA', level: 6, text: "ลบ key จาก dictionary", code: "data.____('age')", ans: "pop", explanation: "pop ใช้ลบ key" },
    { id: 909, mode: 'DATA', level: 6, text: "แปลง tuple เป็น list", code: "lst = ____(t)", ans: "list", explanation: "list() ใช้แปลง tuple เป็น list" },
    { id: 910, mode: 'DATA', level: 6, text: "หาค่ามากที่สุด", code: "m = ____(nums)", ans: "max", explanation: "max() ใช้หาค่าสูงสุด" },

    // ==========================================
    // 10. CONTROL FLOW - โหดพิเศษ Level 7
    // ==========================================
    { id: 1001, mode: 'LOGIC', level: 7, text: "ตรวจสอบค่า None แบบปลอดภัย", code: "if x ____ None:", ans: "is", explanation: "การเปรียบเทียบ None ควรใช้ is ไม่ใช้ ==" },
    { id: 1002, mode: 'LOGIC', level: 7, text: "เงื่อนไขแบบ XOR", code: "if a ____ b:", ans: "^", explanation: "^ คือ XOR สำหรับ Boolean" },
    { id: 1003, mode: 'LOGIC', level: 7, text: "ตรวจสอบว่าค่าไม่อยู่ในช่วง", code: "if not (0 <= x ____ 100):", ans: "<=", explanation: "ใช้ <= เพื่อสร้างช่วง 0 ถึง 100" },
    { id: 1004, mode: 'LOOPS', level: 7, text: "ลูปพร้อม else", code: "____: print('Not found')", ans: "else", explanation: "for-else จะทำงานเมื่อไม่เกิด break" },
    { id: 1005, mode: 'LOGIC', level: 7, text: "เปรียบเทียบหลายค่าต่อเนื่อง", code: "if a < b ____ c:", ans: "<", explanation: "Python รองรับการเปรียบเทียบแบบ a < b < c" },
    { id: 1006, mode: 'LOOPS', level: 7, text: "while แบบ assignment expression", code: "while (line := input()) ____ 'exit':", ans: "!=", explanation: "ลูปทำงานจนกว่าจะพิมพ์ exit (ใช้ Walrus operator)" },
    { id: 1007, mode: 'LOGIC', level: 7, text: "ตรวจสอบชนิดข้อมูลหลายประเภท", code: "if isinstance(x, ____):", ans: "(int, float)", explanation: "ส่ง tuple ของชนิดข้อมูลเข้าไป" },
    { id: 1008, mode: 'LOGIC', level: 7, text: "เงื่อนไขสั้นแบบ ternary", code: "result = 'Even' ____ x % 2 == 0 else 'Odd'", ans: "if", explanation: "รูปแบบ ternary คือ A if condition else B" },
    { id: 1009, mode: 'LOGIC', level: 7, text: "เปรียบเทียบ identity", code: "if a ____ b:", ans: "is not", explanation: "is not ใช้ตรวจสอบว่าไม่ใช่วัตถุเดียวกัน" },
    { id: 1010, mode: 'LOOPS', level: 7, text: "วนซ้ำ dictionary key-value", code: "for k, v in data.____():", ans: "items", explanation: "items() คืนค่า key และ value" },

    // ==========================================
    // 11. FUNCTION - โหดพิเศษ Level 7
    // ==========================================
    { id: 1101, mode: 'FUNC', level: 7, text: "ใช้ nonlocal แก้ scope", code: "____ x", ans: "nonlocal", explanation: "nonlocal ใช้แก้ตัวแปรจากฟังก์ชันชั้นนอก" },
    { id: 1102, mode: 'FUNC', level: 7, text: "ใช้ global", code: "____ count", ans: "global", explanation: "global ใช้แก้ตัวแปรระดับ global" },
    { id: 1103, mode: 'FUNC', level: 7, text: "Decorator พื้นฐาน", code: "____timer", ans: "@", explanation: "@ ใช้เรียก decorator" },
    { id: 1104, mode: 'FUNC', level: 7, text: "Closure", code: "____ inner", ans: "return", explanation: "ต้อง return ฟังก์ชัน inner" },
    { id: 1105, mode: 'FUNC', level: 7, text: "Map function", code: "result = ____(map(str, nums))", ans: "list", explanation: "map คืน iterator ต้องแปลงเป็น list" },
    { id: 1106, mode: 'FUNC', level: 7, text: "Reduce", code: "total = ____(lambda a,b: a+b, nums)", ans: "reduce", explanation: "reduce ใช้รวมค่าทีละคู่" },
    { id: 1107, mode: 'FUNC', level: 7, text: "Keyword-only argument", code: "def func(a, ____, b):", ans: "*", explanation: "* บังคับ argument หลังจากนั้นเป็น keyword-only" },
    { id: 1108, mode: 'FUNC', level: 7, text: "Unpack dictionary", code: "show(____data)", ans: "**", explanation: "** ใช้ unpack dictionary" },
    { id: 1109, mode: 'FUNC', level: 7, text: "Annotations", code: "def add(a:int, b:int) ____ int:", ans: "->", explanation: "-> ใช้บอกชนิดค่าที่คืน" },
    { id: 1110, mode: 'FUNC', level: 7, text: "Generator", code: "____ 1", ans: "yield", explanation: "yield สร้าง generator คืนค่าแบบ iterator" },

    // ==========================================
    // 12. DATA - โหดพิเศษ Level 7
    // ==========================================
    { id: 1201, mode: 'DATA', level: 7, text: "Dictionary comprehension", code: "data = {x: x*x ____ x in range(5)}", ans: "for", explanation: "for ใช้ใน comprehension" },
    { id: 1202, mode: 'DATA', level: 7, text: "Nested list comprehension", code: "matrix = [[i*j ____ j in range(3)] for i in range(3)]", ans: "for", explanation: "ต้องมี for สองชั้น" },
    { id: 1203, mode: 'DATA', level: 7, text: "Set comprehension", code: "s = {x % 3 ____ x in range(10)}", ans: "for", explanation: "รูปแบบเหมือน list comprehension แต่ใช้ปีกกา" },
    { id: 1204, mode: 'DATA', level: 7, text: "Deep copy", code: "b = copy.____(a)", ans: "deepcopy", explanation: "deepcopy คัดลอกข้อมูลซ้อน" },
    { id: 1205, mode: 'DATA', level: 7, text: "Sort ตาม key", code: "nums.sort(____=abs)", ans: "key", explanation: "key ใช้กำหนดฟังก์ชันจัดเรียง" },
    { id: 1206, mode: 'DATA', level: 7, text: "Zip หลายลิสต์", code: "pairs = list(____(a, b))", ans: "zip", explanation: "zip รวมค่าตามตำแหน่ง" },
    { id: 1207, mode: 'DATA', level: 7, text: "Enumerate", code: "for i, v in ____(data):", ans: "enumerate", explanation: "enumerate คืน index และค่า" },
    { id: 1208, mode: 'DATA', level: 7, text: "Default dictionary", code: "d = ____(int)", ans: "defaultdict", explanation: "defaultdict กำหนดค่า default ป้องกัน KeyError" },
    { id: 1209, mode: 'DATA', level: 7, text: "Unpack list", code: "a, b, *rest = ____", ans: "nums", explanation: "ตัวแปรที่รับค่าต้องเป็นลิสต์ที่มีหลายค่า" },
    { id: 1210, mode: 'DATA', level: 7, text: "Frozen set", code: "s = ____([1,2,3])", ans: "frozenset", explanation: "frozenset สร้าง set ที่แก้ไขไม่ได้ (immutable)" }
];