let inputSeed = document.getElementById('inputSeed');
let displayCurrentValue = document.getElementById('displaySeed');
let displaySteps = document.getElementById('steps');
let numList = document.getElementById('numList');

let valueArray = [];
let countArray = [];

//Setup initial empty chart
const labels = countArray;
const data = {
	labels: labels,
	datasets: [
		{
			label: 'Value',
			backgroundColor: '#5bc0de',
			data: valueArray,
		},
	],
};

//config chart params
const config = {
	type: 'line',
	data: data,
	options: {},
};

//Build Chart
const collatzChart = new Chart(document.getElementById('collatzChart'), config);

// Remove list items on each run
function removeListItems(numList) {
	while (numList.firstChild) {
		numList.removeChild(numList.firstChild);
	}
}

function collatzify() {
	removeListItems(numList);
	collatzChart.data.labels = [];
	collatzChart.data.datasets[0].data = [];
	displaySteps.innerHTML = 0;
	let counter = 0;
	let value = parseInt(inputSeed.value, 10);

	//Display value from input
	displayCurrentValue.innerHTML = value;

	//push initial value as 1st step
	collatzChart.data.labels.push(`Step ${counter}`);
	collatzChart.data.datasets[0].data.push(value);

	//Collatz Conjecture
	while (value > 1) {
		if (value % 2 === 0) {
			value = value / 2;
		} else {
			value = 3 * value + 1;
		}
		counter++;
		numList.innerHTML += `<li>${value}</li>`;

		collatzChart.data.labels.push(`Step ${counter}`);
		collatzChart.data.datasets[0].data.push(value);
	}
	displaySteps.innerHTML = counter;
	collatzChart.update();
}
