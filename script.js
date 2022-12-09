let password = document.getElementById('pass');
let confirmation = document.getElementById('pass-confirmation');
let confirmationError = document.getElementById("confirmation-error");

let toSubmit = false;

function checkConfirmation(e) {

    if (e.value.length > 0) {
        // Alert passwords are not equal
        if (e.value !== password.value) {
            confirmationError.innerHTML = "Passwords does not match";
            confirmation.classList.remove("match");
            confirmation.classList.add("not-match");
            toSubmit = false;
        }
        // Remove alert once password and confirmation match
        else {
            confirmationError.innerHTML = "";
            confirmation.classList.remove("not-match");
            confirmation.classList.add("match");
            toSubmit = true;
        }
    }
    // Alert reuirement of password confirmation if empty
    else {
        confirmationError.innerHTML = "Confirm your password";
        confirmation.classList.remove("match");
        confirmation.classList.add("not-match");
        toSubmit = false;
    }
}

function validate () {
    if (toSubmit) {
        return toSumbit;
    }
    return toSubmit;
}