let a,b,c;

a = prompt("Input a:");
b = prompt("Input b:");
c = prompt("Input c:");

if(a==''||b==''||c==''|| a==undefined||b==undefined||c==undefined){
	alert("input values should be ONLY numbers");
}else if(a<=0 || b<=0||c<=0){
	alert("A triangle must have 3 sides with a positive definite length");
}
a = parseInt(a,10);
b = parseInt(b,10);
c = parseInt(c,10);

if((a+b)<c || (b+c)<a || (a+c)<b){
	alert("Triangle doesn’t exist");
}
if( a==b && a==c && b==c){
	console.log("Equivalent triangle");
}else if((a==b) && (a==b)!=c){
	console.log("Isosceles triangle");
}else if((b==c) && (b==c)!=a){
	console.log("Isosceles triangle");
}else if((a==c)&& (a==c)!=b){
	console.log("Isosceles triangle");
}
 if(a!=b && b!=c && a!=c){
	console.log("Scalene triangle");
}

	

