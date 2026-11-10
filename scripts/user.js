 let registrationForm = document.getElementById("registrationForm");
 if (registrationForm) {
    registrationForm.addEventListener('submit', register);
  }

 function register(e){

    e.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("pswd").value;

    const user = {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        password: password
    }

    console.log(user)
 }

 let loginForm = document.getElementById("login");
 if (loginForm) {
    loginForm.addEventListener('submit', login);
  }

 function login(e){

    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("pswd").value;

    const user_log = {
        email: email,
        password: password
    }

    console.log(user_log)
 }