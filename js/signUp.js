const DB_USERS = [];

let signUpNav = document.getElementById("sign-up-nav");
let loginNav = document.getElementById("login-nav");

const signUp = () => {
  let notificationAlert = document.getElementById("notification-alert");
  let notificationText = document.getElementById("notification-text");
  let isValid = validate(true);

  if (isValid) {
    let firstNameField = signUpForm.getElementsByClassName("form-fields")[0];
    let lastNameField = signUpForm.getElementsByClassName("form-fields")[1];
    let emailField = signUpForm.getElementsByClassName("form-fields")[2];
    let passwordField = signUpForm.getElementsByClassName("form-fields")[3];

    const lookup = {
      A: "N",
      B: "O",
      C: "P",
      D: "Q",
      E: "R",
      F: "S",
      G: "T",
      H: "U",
      I: "V",
      J: "W",
      K: "X",
      L: "Y",
      M: "Z",
      N: "A",
      O: "B",
      P: "C",
      Q: "D",
      R: "E",
      S: "F",
      T: "G",
      U: "H",
      V: "I",
      W: "J",
      X: "K",
      Y: "L",
      Z: "M",
      a: "n",
      b: "o",
      c: "p",
      d: "q",
      e: "r",
      f: "s",
      g: "t",
      h: "u",
      i: "v",
      j: "w",
      k: "x",
      l: "y",
      m: "z",
      n: "a",
      o: "b",
      p: "c",
      q: "d",
      r: "e",
      s: "f",
      t: "g",
      u: "h",
      v: "i",
      w: "j",
      x: "k",
      y: "l",
      z: "m",
      0: "5",
      1: "6",
      2: "7",
      3: "8",
      4: "9",
      5: "0",
      6: "1",
      7: "2",
      8: "3",
      9: "4",
      "!": "#",
      $: "%",
      "&": "+",
      "-": "@",
      _: "~",
      "#": "!",
      "%": "$",
      "+": "&",
      "@": "-",
      "~": "_",
    };

    const encode = (inputString) => {
      const lookupKeys = Object.keys(lookup);
      const lookupValues = Object.values(lookup);
      const codeArr = inputString.split("");
      let encodedArr = codeArr.map((codeArrChar) => {
        let index = lookupValues.findIndex(
          (element) => element === codeArrChar
        );
        return lookupKeys[index];
      });
      return encodedArr.join("");
    };

    let firstName =
      firstNameField.getElementsByClassName("form-control")[0].value;
    let lastName =
      lastNameField.getElementsByClassName("form-control")[0].value;
    let email = emailField.getElementsByClassName("form-control")[0].value;
    let inputPassword =
      passwordField.getElementsByClassName("form-control")[0].value;
    let password = encode(inputPassword);

    let newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    DB_USERS.push(newUser);

    reset();
    $("#signUpModal").modal("hide");

    notificationAlert.classList =
      "alert alert-success alert-dismissible fade show";
    notificationText.innerText =
      "Congratulations! You have successfully signed up!";
    notificationAlert.style.display = "block";

    setTimeout(() => {
      notificationAlert.style.display = "none";
    }, 5000);

    let previousSignUpNavInnerContent = signUpNav.innerHTML;

    let previousLoginNavInnerContent = loginNav.innerHTML;

    signUpNav.innerHTML = `<a class="nav-link">Hi ${newUser.firstName}</a>`;
    loginNav.innerHTML = '<a class="nav-link">Logout</a>';

    loginNav.addEventListener("click", () => {
      signUpNav.innerHTML = previousSignUpNavInnerContent;
      loginNav.innerHTML = previousLoginNavInnerContent;
    });
  }
};
