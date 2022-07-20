console.log("Works");

let theme = localStorage.getItem("theme");
if (theme != null) {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    setTheme(this.id);
  });
}

function setTheme(mode) {
  const buffer = mode.slice();
  if (buffer[0] == "l") {
    document.getElementById("theme-style").href = "css/default.css";
  } else if (buffer[0] == "p") {
    document.getElementById("theme-style").href = "css/purple.css";
  } else if (buffer[0] == "g") {
    document.getElementById("theme-style").href = "css/green.css";
  } else if (buffer[0] == "b") {
    document.getElementById("theme-style").href = "css/blue.css";
  } else {
    mode = "l";
    document.getElementById("theme-style").href = "css/default.css";
  }

  localStorage.setItem("theme", mode);
}
