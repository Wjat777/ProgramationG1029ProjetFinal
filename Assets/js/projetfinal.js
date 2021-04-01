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

  console.log(email, pwd);
};
sendContact = function () {
  var name = document.getElementById("ContactName").value;
  var email = document.getElementById("ContactEmail").value;
  var message = document.getElementById("Message").value;

  console.log(name, email, message);
};

incription = function () {};
