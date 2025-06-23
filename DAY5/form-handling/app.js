const handlename = (event) => {
  const name = event.target;
  console.log(name.value);
  title.innerHTML = `<h3>Helloo  </h3><em><i>${name.value}</i></em>`;
};

const title = document.getElementById("greet");
const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log(event);
  const inputs = event.target;
  //   const name = inputs[0];
  //   const email = inputs[1];
  //   const pass = inputs[2];
  //   const college = inputs[3];

  // not feasible to use index as it will change if chnage the flow or order of inputs

  const name = inputs.username;
  const email = inputs.email;
  const pass = inputs.userPassword;
  const college = inputs.college;
  console.log(name.value, email.value, pass.value, college.value);

  const emailregex = new RegExp(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
  );
  if (!emailregex.test(email.value)) {
    alert("Please enter a valid email address");
    return;
  }

  if (pass.value.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }
  window.open("./thankyou.html", "_self");
};
