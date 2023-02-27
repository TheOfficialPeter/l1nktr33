// Wait for discord to load
window.onload = function () {
	var dots = document.getElementsByClassName("pointerEvents-9SZWKj");
	var realDot = null;
	
	for (let i = 0; i < dots.length; i++) {
		if (dots[i].parentNode.parentNode.ClassName == "avatarWrapper-1B9FTW withTagAsButton-OsgQ9L") {
			realDot = dots[i];
		}
	}

	// TODO: get the green/yellow/gray dot and change text
};
