function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]["number"].value;
    let z = document.forms["myForm"]["psw"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Phone Number must be filled out");
        return false;
    }
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById('myForm').style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}