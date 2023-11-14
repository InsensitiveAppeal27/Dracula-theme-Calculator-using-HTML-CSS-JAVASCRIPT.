function Calculate(value){
    document.getElementById("result").value += value;
};
function clearResult(){
        document.getElementById("result").value = "";
};

function CalculateResult(){
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
};

let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

function enableDarkMode() {
    document.querySelector('h1').style.color = '#e3242b';
    document.querySelector('body').style.backgroundImage = 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )';
    
}

function disableDarkMode() {
    document.querySelector('h1').style.color = 'black';
    document.querySelector('body').style.backgroundImage = 'none';
    document.getElementsByClassName('container').style.color = 'white';
}
