export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Returns false if password length is < 7 or > 14. Password must start with a letter and contain only A-Z, a-z, 0-9, and _.
export function checkPassword(input) {
  const passw = /^[A-Za-z]\w{7,14}$/;
  if (input.match(passw)) {
    return true;
  }
  return false;
}
