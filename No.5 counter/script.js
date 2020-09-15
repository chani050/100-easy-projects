let lower = document.querySelector('#lower');
let add = document.querySelector('#add');
let number = document.querySelector('#number');
let counter = 0;


add.addEventListener('click', ()=>{

	counter += 1;
	number.innerHTML = counter;
	changeColor();
});
lower.addEventListener('click', ()=>{
	counter -= 1;
	number.innerHTML = counter;
	changeColor();
});
;
function changeColor(){
	if(counter>0){
		number.style.color = 'green';
	}
	if(counter < 0){
		number.style.color = 'red';
}	if(counter == 0){
		number.style.color = 'yellow';
}}