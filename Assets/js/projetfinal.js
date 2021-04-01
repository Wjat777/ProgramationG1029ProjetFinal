auSujet = function () {
  $("#ausujet").modal("show"); //Utilise JQuery pour afficher le Modal. Actuel limitation Bootstrap 4.6
};

recalculateRecette1 = function () {
  var viandeEnGrammes = document.getElementById("viande1").value * 1000;

  document.getElementById("rec1Sel").textContent = (2.1 / 100) * viandeEnGrammes;
  document.getElementById("rec1SelCure").textContent = (0.25 / 100) * viandeEnGrammes;
  document.getElementById("rec1Antiox").textContent = (0.3 / 100) * viandeEnGrammes;
  document.getElementById("rec1Poivre").textContent = (0.1 / 100) * viandeEnGrammes;
  document.getElementById("rec1Muscade").textContent = (0.1 / 100) * viandeEnGrammes;
  document.getElementById("rec1Ail").textContent = (0.15 / 100) * viandeEnGrammes;
  document.getElementById("rec1Chili").textContent = (0.1 / 100) * viandeEnGrammes;
  document.getElementById("rec1Eau").textContent = 5; //constante
};

login = function () {
  var email = document.getElementById("UserEmail").value;
  var pwd = document.getElementById("UserPwd").value;
  var regexPWD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!regexEmail.test(email)) {
    document.getElementById("UserEmail").style.color = "red";
    return false;
  } else {
    document.getElementById("UserEmail").style.color = "black";
  }

  if (!regexPWD.test(pwd)) {
    document.getElementById("UserPwd").style.color = "red";
    return false;
  } else {
    document.getElementById("UserPwd").style.color = "black";
  }
  alert("Bienvenue " + email);
  console.log(email, pwd);
};
sendContact = function () {
  var name = document.getElementById("ContactName").value;
  var email = document.getElementById("ContactEmail").value;
  var message = document.getElementById("Message").value;
  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regexEmail.test(email)) {
    document.getElementById("ContactEmail").style.color = "red";
    return false;
  } else {
    document.getElementById("ContactEmail").style.color = "black";
  }
  alert("Message envoyé avec sucess!");

  console.log(name, email, message);
};

incription = function () {
  var nom = document.getElementById("Nom").value;
  var prenom = document.getElementById("Prenom").value;

  var email1 = document.getElementById("UserEmail").value;
  var email2 = document.getElementById("UserEmailConfirmation").value;

  var pwd1 = document.getElementById("UserPwd1").value;
  var pwd2 = document.getElementById("UserPwd2").value;

  var GenreEl = document.querySelector('input[name="Genre"]:checked');
  var VilleEl = document.getElementById("Ville");
  var Ville = VilleEl.options[VilleEl.selectedIndex].text;

  $(".dropdown").each(function (key, dropdown) {
    var $dropdown = $(dropdown);
    $dropdown.find(".dropdown-menu a").on("click", function () {
      $dropdown.find("button").text($(this).text()).append(' <span class="caret"></span>');
      $("#dropdown_input").val($(this).text()); // change the value of hidden input field
    });
  });

  var regexPWD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!regexEmail.test(email1)) {
    document.getElementById("UserEmail").style.color = "red";
    return false;
  } else {
    document.getElementById("UserEmail").style.color = "black";
  }

  if (!regexEmail.test(email2)) {
    document.getElementById("UserEmailConfirmation").style.color = "red";
    return false;
  } else {
    document.getElementById("UserEmailConfirmation").style.color = "black";
  }

  if (email1 !== email2) {
    document.getElementById("UserEmailConfirmation").style.color = "red";
    return false;
  } else {
    document.getElementById("UserEmailConfirmation").style.color = "black";
  }

  if (!regexPWD.test(pwd1)) {
    document.getElementById("UserPwd1").style.color = "red";
    return false;
  } else {
    document.getElementById("UserPwd1").style.color = "black";
  }

  if (!regexPWD.test(pwd2)) {
    document.getElementById("UserPwd2").style.color = "red";
    return false;
  } else {
    document.getElementById("UserPwd2").style.color = "black";
  }

  if (pwd1 !== pwd2) {
    document.getElementById("UserPwd2").style.color = "red";
    return false;
  } else {
    document.getElementById("UserPwd2").style.color = "black";
  }
  //verifier si le genre est selectionné
  if (!GenreEl) {
    document.getElementById("genreerror").style.visibility = "visible";
    return false;
  } else {
    document.getElementById("genreerror").style.visibility = "hidden";
    var Genre = GenreEl.value;
  }
  if (!Ville) {
    document.getElementById("villeerror").style.visibility = "visible";
    return false;
  } else {
    document.getElementById("villeerror").style.visibility = "hidden";
  }

  alert("Inscription fait avec success!");
};
