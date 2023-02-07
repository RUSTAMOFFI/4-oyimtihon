const emailINP = document.querySelector("#email");
const passwordINP = document.querySelector("#password");
const loginBTN = document.querySelector(".login");

loginBTN.addEventListener("click", function (e) {
    e.preventDefault()
  const email = emailINP.value;
  const password = passwordINP.value;
  postLogin(email, password);
});

async function postLogin(e, p) {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json ; charset=UTF-8",
    },
    body: JSON.stringify({
      email: e,
      password: p,
    }),
  });
  const data = await response.json();
  if (data.token) {
    localStorage.setItem("token", JSON.stringify(data.token));
    window.location.replace("./book.html");
  } 
}
