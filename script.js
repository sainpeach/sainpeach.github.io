let cnt = 0;

const button = document.querySelector("#countButton");
const text = document.querySelector("#countText");
const dec = document.querySelector("#countDec");
const reset = document.querySelector("#countReset");

button.addEventListener("click", function() {
	cnt += 1;
	text.textContent = "You have clicked " + cnt + " times.";
});

dec.addEventListener("click", function() {
	cnt -= 1;
	text.textContent = "You have clicked " + cnt + " times.";
});

reset.addEventListener("click", function() {
	cnt = 0;
	text.textContent = "You have clicked " + "0" + " times."
});