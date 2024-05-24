function submitForm() {
    let form = document.getElementById("registrationForm");
    let progress = document.getElementById("progress");

    if (form.checkValidity()) {
        progress.value = 100;
        document.getElementById("result").innerText = "Form submitted!";
    } else {
        form.reportValidity();
    }
}

