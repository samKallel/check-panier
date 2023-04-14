// Declaration
var favs = Array.from(document.querySelectorAll(".bi-suit-heart-fill"));
var deleteBtns = Array.from(document.querySelectorAll(".bi-trash3-fill"));
var cards = Array.from(document.querySelectorAll(".card"));
var plusBtns = Array.from(document.querySelectorAll(".bi-cart-plus"));
var minusBtns = Array.from(document.querySelectorAll(".bi-cart-dash"));

//Totle price
function total() {
	let qte = Array.from(document.querySelectorAll(".qte"));
	let price = Array.from(document.querySelectorAll(".prix"));
	var s = 0;
    // console.log (qte);
    // console.log (price);
	for (let i = 0; i < price.length; i++) {
		s = s + price[i].innerHTML * qte[i].innerHTML;
        // console.log (s);
	}
    // console.log(document.getElementById("sum"))
	document.getElementById("sum").innerHTML = s +"$";
}

// Favourites
for (let fav of favs) {
	fav.addEventListener("click", function () {
		if (fav.style.color == "black") {
			fav.style.color = "red";
		} else {
			fav.style.color = "black";
		}
	});
}

// Remove button
for (let i in deleteBtns) {
	deleteBtns[i].addEventListener("click", function () {
		cards[i].remove();
		total();
	});
}

// Add button
for (let plus of plusBtns) {
	plus.addEventListener("click", function () {
		plus.nextElementSibling.innerHTML++;
		total();
	});
}

// Minus Button
for (let minus of minusBtns) {
	minus.addEventListener("click", function () {
		minus.previousElementSibling.innerHTML > 0
			? minus.previousElementSibling.innerHTML--
			: null;
		total();
	});
}

