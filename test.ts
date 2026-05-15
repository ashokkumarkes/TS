// (
// 	():void =>{ // it won't retun anything, so void is used
// 		for(var i:number = 0; i<3; i++){
// 			(
// 				(i:number):void =>{
// 					setTimeout(()=>{
// 						console.log(i);
// 					},0);
// 				}
// 			)(i)
// 		}
// 	}
// )()


// for(var i=0;i<3;i++) setTimeout(()=>console.log(i),0);
// prints 3 3 3

// Q2. Union Types — What does this output?
// function show(val: string | number) {
//   if (typeof val === "string") return val.toUpperCase();
//   return val * 2;
// }
// console.log(show(5));
// console.log(show("hi"));


// Q1. Type Inference — What is the type of `x`?
// let x = [1,2,3,4,5];
// x.push(1);
// console.log(x);