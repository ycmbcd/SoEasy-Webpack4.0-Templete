export default function () {
  let html = document.getElementById("app").innerHTML
  document.getElementById("app").innerHTML = html + '<h2>/src/add.js Loaded Successfully!</h2><br>';
}
