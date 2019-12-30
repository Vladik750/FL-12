let email = prompt('Enter your email:');
let num1 = 5;
let num2 = 6;

if(email === null){
	alert('Canceled');
}else{

	if(email.length < num1 ){
		alert('I don`t know any emails having name length less than 5 sumbols');
	}else{
		if(email !== 'user@gmail.com' && email !== 'admin@gmail.com'){
			alert('I don`t know you!');
		}else{
			let pass = prompt('Enter a password: ');

			if( pass === null ){
				alert('Canceled');
			}

			if(email === 'user@gmail.com' && pass !== 'UserPass'|| email === 'admin@gmail.com' && pass !== 'AdminPass'){
				alert('Wrong password!')
			}else{
				let changePass = confirm('Do you want to change your password?')

				if(changePass === false){
					alert('You have failed the change');
				}else{
					let old_pass = prompt('Enter your old password:');
					if(old_pass === null){
						alert('Canceled');
					} 
					if(old_pass !== pass){
							alert('Wrong password');
					}else{		
							let new_pass = prompt('Enter a new password:');
							
							if(new_pass === null){
								alert('Canceled')
							}else{

								if(new_pass.length < num2){
									alert('It`s too short password.Sorry');
								}else{
								
									let new_pass2 = prompt('Enter new password again:');
									if(new_pass2 !== new_pass){
										alert('You wrote the wrong password');
									} 
									if(new_pass2 === new_pass){
										alert('You have successfully changed your password.');
									}
								}	
							}		
						}
					}
				}		
			}
		}	
	}		

