
// function add(){
// 	console.log('hello');
// }

// add();

function add(): void{
	let name: string = 'ashok' // it is explicit
	let age : number = 32 // it is explicit
	let email = 'ashok@gmail.com' // it is inference
	// TypeScript infers 'boolean[]'
	let flags = [true, false, true];

	console.log(name);
	console.log(age)
	console.log(typeof email)
	console.log(typeof flags)
}
add();