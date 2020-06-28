function openWindow() {
  myWin = window.open(
    "http://google.com/",
    "myWin",
    "width=1200, height=600, top=100, left=100, scrollbars=yes, resizable=yes"
  );
}
function myFunction() {
  myWin = window.open(
    "http://www.qaclickacademy.com/",
    "myWin",
    "width=1200, height=600, top=100, left=100, scrollbars=yes, resizable=yes"
  );
}
function displayAlert() {
  var value = document.getElementById("name").value;
  alert(
    "Hello " + value + ", share this practice page and share your knowledge"
  );
  document.getElementById("name").value = "";
}
function displayConfirm() {
  var value = document.getElementById("name").value;
  confirm("Hello " + value + ", Are you sure you want to confirm?");
  document.getElementById("name").value = "";
}
function hideElement() {
  var x = document.getElementById("displayed-text");
  //style.visibility = "hidden";
  x.style.display = "none";
}
function showElement() {
  var x = document.getElementById("displayed-text");
  //style.visibility = "visible";
  x.style.display = "block";
}
