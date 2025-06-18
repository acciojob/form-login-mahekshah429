function getFormvalue() {
  const form = document.getElementById("loginForm");

  let fname = form.fname.value.trim();
  let lname = form.lname.value.trim();

  // Handle empty input
  if (!fname && !lname) {
    alert("Please enter your first and last name.");
    return false;
  } else if (!fname) {
    alert("First name is required.");
    return false;
  } else if (!lname) {
    alert("Last name is required.");
    return false;
  }

  const fullName = `${fname} ${lname}`;
  alert(fullName);

  return false; // prevent actual form submission
}
