
// Get the modal
var modal = document.getElementsByClassName("modal");
				
// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

var link = document.getElementsByClassName("myLink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function() { 
    modal[0].style.display = "block";
}

btn[1].onclick = function() { 
    modal[1].style.display = "block";
}

btn[2].onclick = function() { 
    modal[2].style.display = "block";
}

btn[3].onclick = function() { 
    modal[3].style.display = "block";
}

btn[4].onclick = function() { 
    modal[4].style.display = "block";
}

// When user clicks the header or picture, open the modal. 2 links for every project
// .NET project
link[0].onclick = function() {
    modal[0].style.display = "block";
}

link[1].onclick = function() {
    modal[0].style.display = "block";
}

// React project
link[2].onclick = function() {
    modal[1].style.display = "block";
}

link[3].onclick = function() {
    modal[1].style.display = "block";
}

// Spring project
link[4].onclick = function() {
    modal[2].style.display = "block";
}

link[5].onclick = function() {
    modal[2].style.display = "block";
}

// Android project
link[6].onclick = function() {
    modal[3].style.display = "block";
}

link[7].onclick = function() {
    modal[3].style.display = "block";
}

// Fibonacci project
link[8].onclick = function() {
    modal[4].style.display = "block";
}

link[9].onclick = function() {
    modal[4].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
      modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}

span[2].onclick = function() {
    modal[2].style.display = "none";
}

span[3].onclick = function() {
    modal[3].style.display = "none";
}

span[4].onclick = function() {
    modal[4].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
  if (event.target == modal[1]) {
    modal[1].style.display = "none";
  }
  if (event.target == modal[2]) {
    modal[2].style.display = "none";
  }
  if (event.target == modal[3]) {
    modal[3].style.display = "none";
  }
  if (event.target == modal[4]) {
    modal[4].style.display = "none";
  }
}

// Back to top button

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}