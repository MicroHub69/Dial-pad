function getMail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "msodq2018@gmail.com",
    Password: "Gmail2020*",
    To: "ojnewtonn@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
