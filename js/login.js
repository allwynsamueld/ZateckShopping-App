const login = () => {
  let signUpNav = document.getElementById("sign-up-nav");
  let loginNav = document.getElementById("login-nav");
  let notificationAlert = document.getElementById("notification-alert");
  let notificationText = document.getElementById("notification-text");

  let isValid = loginValidate(true);
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
  const decode = (encodedStr) => {
    const codeArr = encodedStr.split("");
    let decodedArr = codeArr.map((codeArrChar) => lookup[codeArrChar]);
    return decodedArr.join("");
  };

  if (isValid) {
    let loginEmailField = loginForm.getElementsByClassName("form-fields")[0];
    let loginPasswordField = loginForm.getElementsByClassName("form-fields")[1];

    let email = loginEmailField.getElementsByClassName("form-control")[0].value;
    let password =
      loginPasswordField.getElementsByClassName("form-control")[0].value;

    // Check whether entered email exists in the DB
    let loginUser = DB_USERS.find((user) => user.email === email);
    if (!loginUser) {
      notificationAlert.classList =
        "alert alert-warning alert-dismissible fade show";
      notificationText.innerText =
        "User with entered email address does not exists. Please Sign Up";
    } else {
      // If enetered email exists in DB, check whether password matches
      if (password === decode(loginUser.password)) {
        notificationAlert.classList =
          "alert alert-success alert-dismissible fade show";
        notificationText.innerText = "Access Granted";

        let previousSignUpNavInnerContent = signUpNav.innerHTML;
        let previousLoginNavInnerContent = loginNav.innerHTML;

        signUpNav.innerHTML = `<a class="nav-link">Hi ${loginUser.firstName}</a>`;
        loginNav.innerHTML = '<a class="nav-link">Logout</a>';

        loginNav.addEventListener("click", () => {
          signUpNav.innerHTML = previousSignUpNavInnerContent;
          loginNav.innerHTML = previousLoginNavInnerContent;
        });
      } else {
        notificationAlert.classList =
          "alert alert-danger alert-dismissible fade show";
        notificationText.innerText = "Access Denied";
      }
    }

    resetLogin();
    $("#loginModal").modal("hide");

    notificationAlert.style.display = "block";

    setTimeout(() => {
      notificationAlert.style.display = "none";
    }, 5000);
  }
};
