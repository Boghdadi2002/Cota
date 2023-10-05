function formValidate() {
  var UserName = document.getElementById("UserName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var Phone = document.getElementById("phone").value;
  var error = document.getElementById("error");
  var text = "";
  if (UserName.length < 5) {
    text = "Please Enter Valid UserName";
    error.innerHTML = text;
    return false;
  }
  else if (email.indexOf("@") == -1) {
    text = "Please Enter Valid Email";
    error.innerHTML = text;
    return false;
  }
  else if (password.length < 8) {
    text = "Please Enter Valid password";
    error.innerHTML = text;
    return false;
  }
  else if (isNaN(Phone) || Phone.length != 11) {
    text = "Please Enter Valid phone";
    error.innerHTML = text;
    return false;
  } 
  else {
    alert("Done");
    return true;
  }
}
console.log(UserName.Value);