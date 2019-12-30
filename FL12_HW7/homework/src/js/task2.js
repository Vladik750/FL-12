let zero = 0;
let one = 1;
let two = 2;
let three = 3;
let four = 4;
let max = 9;
let total = 0;
let counter =1;
let True = true;

let tf = 25;
let fifty = 50;
let hundred = 100;

while (True === true){
	
	let attempts = 3;
	let possible = hundred;
	let pos = possible*counter;

	let question = confirm('Do you want to play a game?');
	if(question === false){
		alert('You did not become a billionaire, but can.');
		break;
	}else{
		let random = parseInt(Math.random()*max);

		for(let i=zero;i<three;i++){
			let choose = parseInt(prompt('Choose a roulette pocket number from 0 to '+ (max-1) +'\n'+
				'Attempts left:'+attempts +'\n' +
				'Total prize:'+total+'$ \n' + 
				'Possible prize on current attempt:'+pos+'$'));
			if(choose === random && i === zero){
				alert('Congratulations');
				break;
			}else if(choose === random && i === one ){
				alert('Congratulations');
				break;
			}else if(choose === random && i === two){
				alert('Congratulations');
				break;
			}else if(choose !== random && i===zero){
				attempts = two;
				pos = pos/two;
			}else if(choose !== random && i === one){
				attempts =one;
				pos = pos/two;
			}	
			
		}
		total+=pos;
		max+=four;
		counter*=two;
	}	
	alert('Thank`s for your participation.Your prize is:' + pos + '$' );
	let again = prompt('Do you want to play again?');
	if(again === false){
	break;
	}
}
	