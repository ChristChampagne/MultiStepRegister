let formOne = document.getElementById('form1-btn')
let formOneInterface = document.getElementById('form-1')
let formTwo = document.getElementById('form2-btn')
let formTwoInterface = document.getElementById('form-2')
let formThree = document.getElementById('form3-btn')
let formThreeInterface = document.getElementById('form3-btn')
let personName = document.getElementById('name')
let personEmail = document.getElementById('email')
let currentScreen = 1;
document.getElementById('currentStep').innerHTML = " " + currentScreen + " ";
drawBalls();



let data = [];

formOne.addEventListener('click',(()=>{
!personName.value ? personName.style.borderColor ="#ff0000" : personName.style.borderColor = ""
!personEmail.value ? personEmail.style.borderColor ="#ff0000" : personEmail.style.borderColor = ""

if(personName.value && personEmail.value){
    if(checkEmail(personEmail.value)){
        data.push(personName.value,personEmail.value);
        SeccondInterface();
    }else{
        personEmail.style.borderColor ="#ff0000"
    }
}

}));

function SeccondInterface(){
    currentScreen++;
    drawBalls();
    formOneInterface.style.display = "none";
    formTwoInterface.style.display = "block";
}

function checkEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function drawBalls(){
    for(i=1;i<=currentScreen;i++){
        document.getElementById('ball-'+i).style.backgroundColor = "#753EE4"
    }


}
