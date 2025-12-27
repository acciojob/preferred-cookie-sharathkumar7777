//your JS code here. If required.
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");
const form = document.getElementById("font-form");

/* ---------- COOKIE HELPERS ---------- */
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) return val;
  }
  return null;
}

/* ---------- APPLY PREFERENCES ---------- */
function applyPreferences(fontSize, fontColor) {
  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
}

/* ---------- LOAD FROM COOKIES ON PAGE LOAD ---------- */
const savedFontSize = getCookie("fontsize");
const savedFontColor = getCookie("fontcolor");

if (savedFontSize) {
  fontSizeInput.value = savedFontSize;
  document.documentElement.style.setProperty(
    "--fontsize",
    savedFontSize + "px"
  );
}

if (savedFontColor) {
  fontColorInput.value = savedFontColor;
  document.documentElement.style.setProperty(
    "--fontcolor",
    savedFontColor
  );
}

/* ---------- SAVE BUTTON HANDLER ---------- */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  applyPreferences(fontSize, fontColor);
});
