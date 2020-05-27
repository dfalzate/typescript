const button = document.querySelector('button');
const number1 = document.getElementById('number1')! as HTMLInputElement;
const number2 = document.getElementById('number2')! as HTMLInputElement;

function add(num1: number, num2: number) {
	return +num1 + +num2;
}

button.addEventListener('click', () => {
	console.log(add(+number1.value, +number2.value));
});
