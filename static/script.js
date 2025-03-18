var x, y, z;
x = 5;
y = 7;
z = x + y;
console.log(z);

var A, B, C;
A = "Hello";
B = "world!";
C = A + "" + B;
console.log(C);

function SumNPrint(x1, x2) {
  let x3 = x1 + x2;
  console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length < z.length) {
  console.log(C);
} else if (C.length > z.length) {
  console.log(z);
} else {
  console.log("good job!");
}

let L1 = ["WaterMellon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "kiwi", "Orange"];

// function findTheBanana(array){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === "Banana"){
//             window.alert("Found the Banana in " + i)
//         }
//       }
// }

// function findTheBananaForEach(array) {
//     array.forEach(function(fruit) {
//       if (fruit === "Banana") {
//         alert("We found a banana in the first array");
//       }
//     });
//   }

//   findTheBananaForEach(L1);
//   findTheBananaForEach(L2);

function greetingFunc() {
  const d = new Date();
  let h = d.getHours();
  if (h < 12) {
    message = "Good morning";
  } else if (12 < h < 18) {
    message = "Good afternoon";
  } else if (18 < h < 20) {
    message = "Good evening";
  } else if (20 < h < 24 && 0 < h < 5) {
    message = "Good night";
  }
  let element = document.getElementById("greeting");
  if (element) {
    element.innerHTML = message + ", my name is Wunwan";
  }
}

if (window.location.href.includes("index.html")) {
  greetingFunc();
}

function addYear() {
  var d = new Date();
  var y = d.getFullYear();
  var E = document.getElementById("copyYear");
  E.innerHTML += y;
}

function showlist() {
  document.getElementById("SeeMoreBTN").style.display = "none";
  document.getElementById("FavList").style.display = "block";
}

function validate() {
  var userName = document.getElementById("name");
  var userEmail = document.getElementById("email");
  var userText = document.getElementById("comment");
  var msg = document.getElementById("ValidateMsg");
  if (
    !userName.checkValidity() ||
    !userEmail.checkValidity() ||
    !userText.checkValidity()
  ) {
    msg.innerHTML =
      "Please fill out the form correctly so I can get back to you :)";
  }
}

$("#readMore").click(function () {
  $(".expand").show();
  $("#readMore").hide();
});

$("#readLess").click(function () {
  $(".expand").hide();
  $("#readMore").show();
});
