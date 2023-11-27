function appendValue(value){
    document.getElementById("input").value += value;
}

function clearDisplay() {
    document.getElementById("input").value = "";
}

function deteleCharacter(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val.substring(0, val.length - 1);
}

function calculate(){
    let input = document.getElementById("input");
    let result = eval(input.value);
    document.getElementById("input").value = result;

}

var darkMode = false;

function togglemode(){
    let cal = document.querySelector('.calculator');
    darkMode = !darkMode;
    if(darkMode) {
        cal.classList.add('dark-mode');
        
    } else {
        cal.classList.remove('dark-mode');
    }
    
}