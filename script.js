let birthDate = document.querySelector("#brthDay");
let luckyNum = document.querySelector("#luckyNo");
let CheckButton = document.querySelector(".chckBtn");
let finalMessage = document.querySelector(".message");
let luckyNumber = "", totalsum = "";

function getBirthDateNumber(dob) {
    let updatedDob = dob.replaceAll("-", "");
    let sum = 0;
    console.log(updatedDob);
    for (let i = 0; i < updatedDob.length; i++) {
        sum += Number(updatedDob.charAt(i));
    }
    return sum;
}

function compareNum(dobNumber, LuckyNumber) {
    if (dobNumber == LuckyNumber) {
        return true;
    }
    return false;
}

document.querySelector(".chckBtn").addEventListener("click", () => {
    //get birth Date number
    if (birthDate.value !== "" && luckyNum.value !== "") {
        totalsum = getBirthDateNumber(birthDate.value.toString());
        //get lucky Number
        luckyNumber = compareNum(totalsum, luckyNum.value);
        //compare birth date number with lucky Number
        if (luckyNumber) {
            finalMessage.innerHTML = "yey 😄 , your birth day is lucky!!";
        } else {
            finalMessage.innerHTML = "Oops 😶 , your birth day is not so lucky!!";
        }
    } else {
        if (birthDate.value === "") {
            finalMessage.innerHTML = "Please select Date from DOB";
        } else if (luckyNum.value === "") {
            finalMessage.innerHTML = "Please enter your lucky number to proceed";
        }
    }
});
