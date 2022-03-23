const keyboard = document.getElementById("keyboard");
var button = keyboard.querySelectorAll("button");
const output = document.getElementById("output")
// console.log(button)

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        if (this.innerHTML == "=") {
            output.innerHTML = eval(output.innerHTML);
        }
        else {
             if (this.innerHTML == "C") {
                output.innerHTML = " ";
            }
            else if(this.innerHTML =="⌫") {
                function back() {
                    output.innerHTML = output.innerHTML - 1;
                }
 
            }
            else{

                output.innerHTML = output.innerHTML + this.innerHTML
            }

        }
    })
}
