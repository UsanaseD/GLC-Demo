const user = document.getElementById("usr");
const login = document.getElementById("login");

login.addEventListener("click", (e) => {
  if (user.value === "gitifu") {
    window.location.href = "../dashboard.html";
  } else if (user.value === "education_sector") {
    window.location.href = "../education.html";
  } else if (user.value === "education_district") {
    window.location.href = "../educ_dist.html";
  } else if (user.value === "mudugudu") {
    window.location.href = "../mudugudu.html";
  } else if (user.value === "imibereho") {
    window.location.href = "../imibereho.html";
  } else {
    alert("Account doesn't exist!");
  }
});
