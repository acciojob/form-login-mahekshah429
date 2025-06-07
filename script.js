function getFormvalue(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get trimmed input values
  const firstName = document.querySelector('input[name="fname"]').value.trim();
  const lastName = document.querySelector('input[name="lname"]').value.trim();

  // Check for empty fields (optional edge case handling)
  if (!firstName && !lastName) {
    alert("Please enter your name.");
    return;
  }

  // Show full name in alert
  alert(`${firstName} ${lastName}`);
}
