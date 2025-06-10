function validForm(e) {
			e.preventDefault();
			let name = document.getElementById('name');
			let email = document.getElementById('email');
			let password = document.getElementById('pwd');
			let nmerr = document.getElementById('nmErr');
			let emailErr = document.getElementById('emailErr');
			let passwordErr = document.getElementById('passwordErr');
			
			let isvalid = true;

			nmerr.textContent = '';
			if(name.value.trim() === ''){
				nmerr.textContent = 'Name is required';
				isvalid = false;
			}

			emailErr.textContent = '';
			if(!email.value.includes('@')){
				emailErr.textContent = 'invalid email';
				isvalid = false;
			}

			passwordErr.textContent = '';
			if(password.value.length<6){
				passwordErr.textContent = 'Minimum 6 characters required';
				isvalid = false;
			}

			if (isvalid) {
				alert("Form submitted!");
			}
		}