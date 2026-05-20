class TupleDemo{
	test(){
		let resJson : [boolean, string, number];
		resJson = [true,'Employee details fetched', 200]
		let num : number[] = [1,2,3,4,5];
		console.log(resJson);
	}
}

let obj = new TupleDemo();
obj.test()