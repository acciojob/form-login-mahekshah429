function getFormvalue(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const form = document.getElementById("nameForm");
  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();

  if (!fname && !lname) {
    alert("Please enter your first and last name.");
    return;
  }

  const fullName = `${fname} ${lname}`.trim();
  alert(fullName);
}
