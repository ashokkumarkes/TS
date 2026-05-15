
	function dup(){
		let num = [1,1,2,2,3,3,4,4,5,5];
		let dup = {};
		for(let i = 0; i<num.length; i++){
				if(dup[num[i]]){
					dup[num[i]]++;
				}else{
					dup[num[i]] = 1;
				}
		}
		console.log(dup);
	}
	dup();