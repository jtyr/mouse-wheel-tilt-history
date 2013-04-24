// Wheel handler
function wheel(event){
	var ret = true;

	if (event.wheelDelta) {
		// Tilt to the left
		if (event.wheelDeltaX > 0) {
			window.history.back()
			ret = false;
		}
		// Tilt to the right
		if (event.wheelDeltaX < 0) {
			window.history.forward()
			ret = false;
		}
	}

	event.returnValue = ret;
}

// Bind the onmousewheel event to our handler
window.onmousewheel = document.onmousewheel = wheel;
