// Home Page Welcoming Message - Phase 1 Requirements //

var userName = prompt("What is you lovely name?").toLowerCase();
var userGender = prompt("Are you a male or female?").toLowerCase();
var userAge = prompt("How old are you? (Ex: 25)");

while (userAge <= 0){
    if (userAge <= 0){
        alert("Kindly enter a valid age!");
        userAge = prompt("How old are you? (Ex: 25)");
    }
}

var viewGreeting = confirm("Do you want to view the greeting message customized for you?");



function userInitials(userGender) {
if (userGender == "male") {
    var initialz = "Mr.";
} else if (userGender == "female") {
    var initialz = "Ms.";
} else {
    var initialz = null;
}
return initialz;
}

function formatUserName(userName){
    return userName.charAt(0).toUpperCase() + userName.slice(1);
}

if (viewGreeting == true && (userInitials(userGender) !== null)) {
    alert("Hello and welcome onboard " + userInitials(userGender) + formatUserName(userName) + ".");
} else if(viewGreeting == true && (userInitials(userGender) == null)) {
    alert("Hello and welcome onboard " + formatUserName(userName) + ".");
}


// Home Page Welcoming Message - Phase 2 Requirements //

var question1 = prompt("Do you love programming? (answer by Yes or No)").toLowerCase();
var question2 = prompt("Do you know the difference between programming and coding? (answer by Yes or No)").toLowerCase();
var question3 = prompt("Are you enjoying this prep-course? (answer by Yes or No)").toLowerCase();

var answerArr = [question1, question2, question3];

for (var i = 0; i < answerArr.length; i++){
    if (answerArr[i].length == 0 && answerArr[i] !== "yes" && answerArr[i] !=="no"){
        answerArr[i] = "invalid";
    }
    console.log(answerArr[i]);
}
