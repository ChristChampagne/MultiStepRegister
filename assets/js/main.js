let formOne = document.getElementById('form1-btn')
let formOneInterface = document.getElementById('form-1')
let formTwo = document.getElementById('form2-btn')
let formTwoInterface = document.getElementById('form-2')
let formThree = document.getElementById('form3-btn')
let formThreeInterface = document.getElementById('form3-btn')
let personName = document.getElementById('name')
let personEmail = document.getElementById('email')
let currentStep = document.getElementById('currentStep');
let currentScreen = 1;
document.getElementById('currentStep').innerHTML = " " + currentScreen + " ";
let tempCurrentScreen;
drawBalls();



let data = [];

formOne.addEventListener('click', (() => {
    !personName.value ? personName.style.borderColor = "#ff0000" : personName.style.borderColor = ""
    !personEmail.value ? personEmail.style.borderColor = "#ff0000" : personEmail.style.borderColor = ""

    if (personName.value && personEmail.value) {
        if (checkEmail(personEmail.value)) {
            data.push(personName.value, personEmail.value);
            SeccondInterface();
        } else {
            personEmail.style.borderColor = "#ff0000"
        }
    }

}));

function SeccondInterface() {
    currentScreen++;
    drawBalls();
    formOneInterface.style.display = "none";
    formTwoInterface.style.display = "block";
}

function checkEmail(email) {
    re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function drawBalls() {
    for (i = 1; i <= currentScreen; i++) {

        if (currentScreen == 1) {
            document.getElementById('ball-' + i).style.backgroundColor = "#753EE4";
            document.getElementById('bo-' + currentScreen).classList.add('active')
            tempCurrentScreen = tempCurrentScreen - 1;
        } else {
            document.getElementById('ball-' + i).style.backgroundColor = "#753EE4";
            document.getElementById('bo-' + currentScreen).classList.add('active')
            tempCurrentScreen = currentScreen - 1;
            document.getElementById('bo-' + tempCurrentScreen).classList.remove('active');
        }
    }
}


function getTopic(select) {
    input = document.getElementById(select);
    if (input.classList == "check") {
        input.classList.remove('check');
        input.style.backgroundColor = "#212936";
    } else {

        if (data.includes(input.value)) {
            return
        }

            data.push(input.value);
            input.classList.add("check");
            input.style.color = "white !important";
            input.style.backgroundColor = "#652CD1";
            console.log(data)
        


    }
}
