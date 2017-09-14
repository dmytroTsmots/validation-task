var validationForm = document.createElement("form");

validationForm.setAttribute("name", "login");
validationForm.setAttribute("action", "https://www.google.com.ua");

var inputAge = document.createElement("input");
inputAge.setAttribute("id", "age");
inputAge.setAttribute("type", "text");
inputAge.setAttribute("name", "age");
inputAge.setAttribute("placeholder", "only numbers")
validationForm.appendChild(inputAge);

var spanAge = document.createElement("span");
var textSpanAge = document.createTextNode("Enter Age: ");
spanAge.appendChild(textSpanAge);
validationForm.insertBefore(spanAge, inputAge);

var inputName = document.createElement("input");
inputName.setAttribute("id", "name");
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "username");
inputName.setAttribute("placeholder", "start with user_")
validationForm.appendChild(inputName);

var spanName = document.createElement("span");
var textSpanName = document.createTextNode("Enter User name: ");
spanName.appendChild(textSpanName);
validationForm.insertBefore(spanName, inputName);

var inputDate = document.createElement("input");
inputDate.setAttribute("type", "text");
inputDate.setAttribute("id", "date");
inputDate.setAttribute("name", "username");
inputDate.setAttribute("placeholder", "date format dd/mm/yyyy")
validationForm.appendChild(inputDate);

var spanDate = document.createElement("span");
var textSpanDate = document.createTextNode("Enter current date: ");
spanDate.appendChild(textSpanDate);
validationForm.insertBefore(spanDate, inputDate);

var inputBtn = document.createElement("input");
inputBtn.setAttribute("type", "submit");
inputBtn.setAttribute("value", "Validate Me");
inputBtn.setAttribute("id", "submit");
validationForm.appendChild(inputBtn);

document.body.appendChild(validationForm);

var submit = document.getElementById("submit");
submit.addEventListener("mousedown", checkMe);




function validateAge() {
    var checkAgeValue = document.getElementById("age").value;

    if (isNaN(checkAgeValue) || parseInt(checkAgeValue) < 0 || checkAgeValue.match("e") || checkAgeValue === "") {
    	document.getElementById("age").classList.add("red");
    	alert("You should enter only a number");
        return true;
    } else {
        document.getElementById("age").classList.add("green");
        return false;
    }
}

function validateName() {
	var checkNameValue = document.getElementById("name").value;

	if (checkNameValue.startsWith("user_")) {
		document.getElementById("name").classList.add("green");
		return true;
	} else {
        document.getElementById("name").classList.add("red");
        alert("Your name should start with user_");
        return false;
    }
}

function validateDate() {
  	var arrDate = document.getElementById("date").value.split("/");
  	var d = new Date();

  	if ((d.getFullYear() == arrDate[2]) && (d.getMonth() + 1 == arrDate[1]) && (d.getDate() == arrDate[0])) {
    	document.getElementById("date").classList.add("green");
    	return true;
  	} else {
  		document.getElementById("date").classList.add("red");
  		alert("Yoy should enter current date in format dd/mm/yyyy");
    	return false;
  	}
}


function checkMe() {
	a = validateAge();
	n = validateName();
	d = validateDate();
	if (a && n && d) {
		alert("You can pass");
		return true;
	} else {
		alert("You can`t pass");
		return false;
	}
}