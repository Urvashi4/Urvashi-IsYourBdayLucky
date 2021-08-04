let birthDate = document.querySelector("#brthDay");
let luckyNum = document.querySelector("#luckyNo");
let CheckButton = document.querySelector(".chckBtn");
let finalMessage = document.querySelector(".message");

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
    console.log(birthDate.value);
    let totalsum = getBirthDateNumber(birthDate.value);
    console.log(totalsum);

    //get lucky Number
    let luckyNumber = compareNum(totalsum, luckyNum.value);

    //compare birth date number with lucky Number
    if (luckyNumber) {
        finalMessage.innerHTML = "yey your birth day is lucky!!";
    } else {
        finalMessage.innerHTML = "Oops your birth date is not lucky!!";
    }
});