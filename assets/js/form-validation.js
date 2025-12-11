// assets/js/form-validation.js

document.addEventListener("DOMContentLoaded", () => {
 const form = document.querySelector(".registration-form");
 const fullname = document.getElementById("fullname");
 const email = document.getElementById("email");
 const phone = document.getElementById("phone");
 const role = document.getElementById("role");
 const days = document.getElementById("days");

 // Helper to show error messages
 function showError(input, message) {
 let msg = input.nextElementSibling;
 if (!msg || !msg.classList.contains("msg")) {
 msg = document.createElement("span");
 msg.classList.add("msg");
 input.parentNode.insertBefore(msg, input.nextSibling);
 }
 msg.textContent = message;
 input.setAttribute("aria-invalid", "true");
 }

 function clearError(input) {
 let msg = input.nextElementSibling;
 if (msg && msg.classList.contains("msg")) {
 msg.textContent = "";
 }
 input.removeAttribute("aria-invalid");
 }

 // Validation rules
 function validateFullname() {
 clearError(fullname);
 if (fullname.value.trim().length < 3) {
 showError(fullname, "Full name must be at least 3 characters long.");
 return false;
 }
 return true;
 }

 function validateEmail() {
 clearError(email);
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailPattern.test(email.value.trim())) {
 showError(email, "Please enter a valid email address.");
 return false;
 }
 return true;
 }

 function validatePhone() {
 clearError(phone);
 if (phone.value.trim() === "") return true; // optional
 const phonePattern = /^\+?\d{7,15}$/;
 if (!phonePattern.test(phone.value.trim())) {
 showError(phone, "Enter a valid phone number (7-15 digits, optional +).");
 return false;
 }
 return true;
 }
 function validateRole() {
 clearError(role);
 if (role.value === "") {
 showError(role, "Please select your role.");
 return false;
 }
 return true;
 }

 function validateDays() {
 clearError(days);
 if (days.value === "") {
showError(days, "Please select the days you will attend.");
return false;
 }
 return true;
 }

 // Real-time validation
 fullname.addEventListener("input", validateFullname);
 email.addEventListener("input", validateEmail);
 phone.addEventListener("input", validatePhone);
 role.addEventListener("change", validateRole);
days.addEventListener("change", validateDays);

// Form submit
form.addEventListener("submit", (e) => {
let isValid =
 validateFullname() &
 validateEmail() &
 validatePhone() &
 validateRole() &
 validateDays();

 if (!isValid) {
 e.preventDefault();
 // Focus first invalid field
 const firstInvalid = form.querySelector("[aria-invalid='true']");
 if (firstInvalid) firstInvalid.focus();
 }
 });
});
