console.log("Data Receiving...");

function onSubmit() {
    var inpObj = document.getElementById("name");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
    var inpObj2 = document.getElementById("email");
    if (!inpObj2.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj2.validationMessage;
    }
    var inpObj3 = document.getElementById("number");
    if (!inpObj3.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj3.validationMessage;
    }
    var inpObj4 = document.getElementById("dob");
    if (!inpObj4.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj4.validationMessage;
    }
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const dob = document.getElementById("dob").value;
    console.log("Name is", " ", name);
    console.log("Email is", " ", email);
    console.log("Number is", " ", number);
    console.log("Date of birth is", " ", dob);

}