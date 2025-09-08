document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const input = document.querySelector("input[name='mob-email']");
    const errorMsg = document.getElementById("error_trw");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // form reload na ho

        const value = input.value.trim();

        // Simple regex: mobile (10 digits) OR email (basic check)
        const mobileRegex = /^[6-9]\d{9}$/; // 10 digit, starts 6-9
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (mobileRegex.test(value) || emailRegex.test(value)) {
         } else {
            // errorMsg.style.color = "red";
            // errorMsg.innerText = "Invalid email address.";
             if (/^\d+$/.test(value)) {
                errorMsg.style.color = "red";
                errorMsg.innerText = "Invalid mobile number.";
            } else {
                errorMsg.style.color = "red";
                errorMsg.innerText = "Invalid email address.";
            }
        }
    });
});
