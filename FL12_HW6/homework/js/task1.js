let a,b,c;

a = prompt("Input a:");
b = prompt("Input b:");
c = prompt("Input c:");

if (a==0 || b==0|| c==0 || isNaN(a) || isNaN(b) || isNaN(c) ){
	alert("Invalid input data");
}else{

	let discriminant = ((b*b)-(4*a*c));
	let x1 = ((-b) + Math.sqrt(discriminant))/(2*a);
	let x2 = ((-b) - Math.sqrt(discriminant))/(2*a);
	console.log(discriminant);

	if(discriminant < 0){
		console.log("No solution");
	}else{

	console.log("X1 = ",x1);
	console.log("X2 = ",x2);
	}
}

