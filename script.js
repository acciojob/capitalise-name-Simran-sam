//your JS code here. If required.
let f= document.querySelector("#fname");
f.addEventListener("blur",() => {
	f.value=f.value.toUpperCase();
});
