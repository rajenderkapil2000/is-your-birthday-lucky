const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");


function checkBirthdateIsLucky(){
    const dob = dateOfBirth.nodeValue;
    const sum = calculateSum(dob);
    console.log(sum)
}

function calculateSum(dob){
    dob = dob.replaceAll("-","")
    let sum = 0;
    for(let i=0; i< dob.length; i++){
        
    }
}

checkButton.addEventListener('click',checkBirthdateIsLucky);
