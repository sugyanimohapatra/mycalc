let Input = document.getElementById("Screen")

Input.addEventListener("change", function () {
    console.log(Input.value)
})

var sqrtFlag = false;
var perflag = false;

function bracketopen() {
    if (!on)
        Input.value += '('
}
function bracketclose() {
    if (!on)
        Input.value += ')'
}
function clr() {
    if (!on)
        Input.value = ""
}
function del() {
    if (!on)
        Input.value = Input.value.substr(0, Input.value.length - 1);
}
function set7() {
    if (!on)
        Input.value += "7"
}
function set8() {
    if (!on)
        Input.value += "8"
}
function set9() {
    if (!on)
        Input.value += "9"
}
function Divide() {
    if (!on)
        Input.value += "/"
}
function sqrt() {
    if (!on){
        Input.value += "√"
        sqrtFlag = true;
    }
}
function set4() {
    if (!on)
        Input.value += "4"
}
function set5() {
    if (!on)
        Input.value += "5"
}
function set6() {
    if (!on)
        Input.value += "6"
}
function multiply() {
    if (!on)
        Input.value += "*"
}
function percentage() {
    if (!on){
        Input.value += "%"
        perflag = true;
    }
}
function set1() {
    if (!on)
        Input.value += "1"
}
function set2() {
    if (!on)
        Input.value += "2"
}
function set3() {
    if (!on)
        Input.value += "3"
}
function add() {
    if (!on)
        Input.value += "+"
}
function subtract() {
    if (!on)
        Input.value += "-"
}
function zero() {
    if (!on)
        Input.value += "0"
}
function doublezero() {
    if (!on)
        Input.value += "00"
}
function point() {
    if (!on)
        Input.value += "."
}
function equal() {
        if (sqrtFlag) {
            // console.log(Input.value.substring(1,Input.value.length))
            Input.value = Math.sqrt(Input.value.substring(1, Input.value.length))
        }
        else if (perflag) {
            let per = Input.value.split("%");
            // console.log(per)
            Input.value = parseFloat((per[0] * per[1]) / 100);
        }
        else {
            Input.value = eval(Input.value)
        }
}
let on = 'false'
function onoff() {

    if (on) {
        Input.value = "CASIO.."
        setTimeout(() => {
            Input.value = ""
        }, 1000);
    }
    else {
        Input.value = "Good bye"
        setTimeout(() => {
            Input.value = ""
        }, 1000);
    }
    on = !on
    Input.disabled = on
}