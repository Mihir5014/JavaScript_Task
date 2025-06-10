// Print numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; and for multiples of both, print "FizzBuzz."

for(let i=1;i<=100;i++){
	
	if(i%3==0 & i%5==0){
		document.write('FizzBuzz<br>');
	}else if(i%5==0){
		document.write('Buzz<br>');
	}else if(i%3==0){
		document.write('Fizz<br>');
	}else{
		document.write(i+"<br>");
	}
}