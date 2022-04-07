// RENDER MAIN PAGE
const mainPage = document.getElementById("mainPage")
function renderQuestion() {
    mainPage.innerHTML += `
    <div id="mainPage">
        <button id="btn" class="btn-show-hide" onclick="showUserResults()">Show user results</button>
        <form action="" method="">
            <h2>Câu 1: var khai báo một biến có phạm vi trong block?
            </h2>
            <div class="float_form"><input type="radio" name="cau1">True</div>
            <br>
            <input type="radio" name="cau1">False

            <h2>Câu 2: const khai báo một biến có phạm vi trong block?
            </h2>
            <input type="radio" name="cau2">True
            <br>
            <div class="float_form"><input type="radio" name="cau2">False</div>

            <h2>Câu 3: let khai báo một biến có phạm vi trong block?
            </h2>
            <input type="radio" name="cau3">True
            <br>
            <div class="float_form"><input type="radio" name="cau3">False</div>

            <h2>Câu 4: Giá trị sau cùng của obj trong ví dụ sau là gì?<br>
            <p>
            const obj = { foo: 1 }<br>
            obj.bar = 2
            </p>
            </h2>
            
            <div class="float_form"><input type="radio" name="cau4">1. {foo: 1}</div>
            <div class="float_form"><input type="radio" name="cau4">2. Error</div>
            <div><input type="radio" name="cau4">3. {foo: 1, bar: 2}</div>
            <div class="float_form"><input type="radio" name="cau4">4. {foo: 1, 2: bar}</div>
        
            <h2>Câu 5: Kết quả của ví dụ sau đây là gì?<br>
            <p>const speed = 'quick'
            'The S{speed} brown fox jumps over the lazy dog.
            </p>
            </h2>
            
            <div class="float_form"><input type="radio" name="cau5">1. TypeError</div>
            <div class="float_form"><input type="radio" name="cau5">2. SyntaxError</div>
            <div class="float_form"><input type="radio" name="cau5">3. 'The speed brown fox jumps over the lazy dog.'</div>
            <div class="float_form"><input type="radio" name="cau5">4. 'The quick brown fox jumps over the lazy dog.'</div>
        
            <h2>Câu 6: Giá trị của câu lệnh obj[123] trong ví dụ sau:
            <p>const obj = {<br><br>

            }
            </p>
            </h2>
           
            <div><input type="radio" name="cau6">1. undefined</div>
            <div class="float_form"><input type="radio" name="cau6">2. 'party!'</div>
            

            <h2>Câu 7: Giá trị của array trong ví dụ sau:
            <p>const array = [1, 2, 3]<br>
            const extension = [4, 5, 6]<br>
            array = [...extension, ...array]
            </p>
            </h2>
            
            <div class="float_form"><input type="radio" name="cau7">[1, 2, 3]</div>
            <div class="float_form"><input type="radio" name="cau7">[1, 2, 3, 4, 5, 6]</div>
            <div class="float_form"><input type="radio" name="cau7">[4, 5, 6, 1, 2, 3]</div>
            <div><input type="radio" name="cau7">Error</div>
            
            <h2>Câu 8: Giá trị của a trong ví dụ sau?
            <p>function mystery(...params) {<br>
                return params<br>
            }<br>
            let a = mystery(1, 23, 4);<br>
            </p>
            </h2>
            
            <div class="float_form"><><input type="radio" name="cau8">1. undefined</div>
            <div><input type="radio" name="cau8">2. [1, 23, 4]</div>
            <div class="float_form"><><input type="radio" name="cau8">3. “1 23 4”</div>
            <div class="float_form"><><input type="radio" name="cau8">4. 1 23 4</div>
                        
            <h2>Câu 9: Giá trị của biểu thức sau?<br>
            <p>
            [...[..."..."]].length<br>
            </p>
            </h2>
            
            <div><input type="radio" name="cau9">1. 3</div>
            <div class="float_form"><input type="radio" name="cau9">2. 6</div>
            <div class="float_form"><input type="radio" name="cau9">3. 9</div>
            <div class="float_form"><input type="radio" name="cau9">4. Error</div>
            
            <h2>Câu 10: Giá trị của a và b với ví dụ sau?<br>
            <p>
            let a = 12, b = 3;<br>
            [a, b] = [b, a];
            </p>
            </h2>
            
            <div class="float_form"><input type="radio" name="cau10">a = 12, b = 3</div>
            <div><input type="radio" name="cau10">a = 3, b = 12</div>
            <div class="float_form"><input type="radio" name="cau10">a = 12, b = 12</div>
            <div class="float_form"><input type="radio" name="cau10">a = 3, b = 3</div>
            
            <h2>Câu 11: Giá trị của obj với ví dụ sau?<br>
            <p>
            const obj = {<br>
                name: "MindX"<br>
            }<br>
            const sayHello = (x) => {<br>
                let {name} = x<br>
            name = "Code Intensive"<br>
            }<br>
            sayHellO(obj)
            </p>
            </h2>
            
            <div><input type="radio" name="cau11">1. {name: “MindX”}</div>
            <div class="float_form"><input type="radio" name="cau11">2. {name: “Code Intensive”}</div>
            <div class="float_form"><input type="radio" name="cau11">3. Error</div>
            

            <h2>Câu 12: Giá trị của biểu arr trong ví dụ sau?<br>
            <p>
            let arr = [1, 2, 3, 4, 5]<br>
            arr.map(item => {<br>
            if (item % 2 === 0) {<br>
                    return item;<br>
            }<br>
                return item * 2;<br>
            })<br>
            </p>
            </h2>
           
            <div><input type="radio" name="cau13">{[1, 2, 3, 4, 5]</div>
            <div class="float_form"><input type="radio" name="cau12">[2, 2, 6, 4, 10]</div>
            <div class="float_form"><input type="radio" name="cau12">[2, 4, 6, 8, 10]</div>
            
            <h2>Câu 13: Giá trị của total trong ví dụ sau?<br>
            <p>
            const arr = [1, 2, 3, 4, 5]<br>
            const total = arr.filter(item => item % 2 === 0)<br>
            &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp .reduce((value, item) => value + item , 10)<br>
            </p>
            </h2>

            <div class="float_form"><input type="radio" name="cau13">Error</div>
            <div class="float_form"><input type="radio" name="cau13">15</div>
            <div class="float_form"><input type="radio" name="cau13">6</div>
            <div><input type="radio" name="cau13">16</div>

            <h1>THỰC HÀNH:</h2>
            <h2>1. Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
            <p>
            Input: "abcdef"<br>
            Ouput: "fedcba"
            </p>
            <p>
            
            <div>Input  <input type="text" id="input" placeholder="Input string"></div>
            <button onclick="reverseString(str1)">Reverse String</button>
            <div>Output:</div>
            
        </form>
            
    
            
    </div>
    `
}
renderQuestion()

// FUNCTION SHOW USER RESULT
function showUserResults() {
    function toggle(className, displayState){
    var elements = document.getElementsByClassName(className)
    
    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
        }
    }
    // toggle('float_form', 'block'); // Shows
    toggle('float_form', 'none'); // hides
    document.getElementById("btn").style.backgroundColor = "gray"
    
}

// PRACTIC
// 1. REVERSE() STRING.
var str1 = "abcdef"
function reverseString(inputString) {
    let str2 = inputString.split("")
    str2.reverse()
    console.log(str2)
    let strRev = str2.join("")
    console.log(strRev)
    alert(`Input: ${inputString} Output: ${strRev}`)
}

