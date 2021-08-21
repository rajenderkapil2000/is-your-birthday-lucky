const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#message");


function compareValues(sum, luckyNumber){
    if(sum % luckyNumber ===0){
        message.innerText = "your birthhday is lucky"
    }else{
        message.innerText = "your birthhday is not lucky"
    }
}


function checkBirthdayIsLucky(){
 const   dob = dateOfBirth.value;
 const sum = calculateSum(dob);
 if(dob&&luckyNumber.value){
compareValues(sum, luckyNumber.value)
 }else{
    message.innerText = "Please enter both the fields"
 }
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for (let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}



checkButton.addEventListener("click", checkBirthdayIsLucky);
