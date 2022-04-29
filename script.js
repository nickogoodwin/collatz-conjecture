let inputSeed = document.getElementById('inputSeed');
let displayCurrentValue = document.getElementById('displaySeed');
let displaySteps = document.getElementById('steps');
let numList = document.getElementById('numList');

function collatzify() {
	//cleanup for each run
	removeListItems(numList);
	displaySteps.innerHTML = 0;

	let value = parseInt(inputSeed.value, 10);

	let counter = parseInt(displaySteps.innerHTML, 10);

	displayCurrentValue.innerHTML = value;

	while (value > 1) {
		let prevValue = value;
		if (value % 2 == 0) {
			value = value / 2;
			// numList.innerHTML += `<li><b>${prevValue}</b> / 2 = <b>${value}</b></li>`;
		} else {
			value = 3 * value + 1;
			// numList.innerHTML += `<li>(3 * <b>${prevValue}</b>) + 1 = <b>${value}</b></li>`;
		}
		numList.innerHTML += `<li>${value}</li>`;
		counter++;
		displaySteps.innerHTML = counter;
	}
}

function removeListItems(numList) {
	while (numList.firstChild) {
		numList.removeChild(numList.firstChild);
	}
}
