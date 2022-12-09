let password = document.getElementById('pass');
let confirmation = document.getElementById('pass-confirmation');
let confirmationError = document.getElementById("confirmation-error");

let toSubmit = false;

// console.log(confirmationError.innerHTML)
// console.log(password.value);

function checkConfirmation(e) {
    // console.log(confirmationError.innerHTML);
    // console.log(e.style);

    if (e.value.length > 0) {
        // Alert passwords are not equal
        if (e.value !== password.value) {
            // console.log("Does not match");
            confirmationError.innerHTML = "Passwords does not match";
            toSubmit = false;
        }
        // Remove alert once password and confirmation match
        else {
            confirmationError.innerHTML = "";
            toSubmit = true;
        }
    }
    // Alert reuirement of password confirmation if empty
    else {
        confirmationError.innerHTML = "Confirm your password";
        toSubmit = false;
    }
}

function validate () {
    if (toSubmit) {
        return toSumbit;
    }
    return toSubmit;
}