function gcd(a, b, debug = false){
	let r = a;
	if(b % a === 0){
		if(debug){
			console.log(`${b} / ${a} = ${(b - 0)/a} + ${0}`);
			console.log('------------------');
			console.log(`| [*] gcd = ${r}  |`);
			console.log('------------------');
		}
		return r;
	}
	r = b % a;
	if(debug) console.log(`${b} / ${a} = ${(b - r)/a} + ${r}`);
	return gcd(r, a, debug)
}

// console.log(gcd(100, 10, true)); // 10
