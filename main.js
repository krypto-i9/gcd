function gcd(a, b){
	let r = a;
	if(b % a === 0){
		console.log(`${b} / ${a} = ${(b - 0)/a} + ${0}`);
		console.log('------------------');
		console.log(`| [*] gcd = ${r}  |`);
		console.log('------------------');
		return;
	}
	else{
		r = b % a;
		console.log(`${b} / ${a} = ${(b - r)/a} + ${r}`);
		gcd(r, a);
	}
}

//gcd(1424,3084);