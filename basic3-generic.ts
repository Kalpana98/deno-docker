console.log('---------------Generic Types---------------');
// Reference - https://youtu.be/EcCTIExsqmI?si=9JfbzwJIJDBAH_AE
// Using 'any' is not ideal, we can use Generic Types
// Example 1 ------------------------------------------
type A = {
	a: string;
	b: string;
};
interface B {
	a: string;
	b: number;
}

const checkA: A = {
	a: 'abc',
	b: 'def',
};
const checkB: B = {
	a: 'ok',
	b: 100,
};
// Return type of the func will be based on what is returned
const checkType = <ElementType>(check: ElementType) => {
	return check;
};
// // Return type of the func is explicitly string, play with it!
// function checkType <T extends A | B>(check: T): string {
//     return `a is ${check.a}, b is ${check.b}`;
// }

console.log({ hereA: checkType(checkA), hereB: checkType(checkB) });

// Example 2 ------------------------------------------
const mapCheck1 = new Map<string, number>();
const mapCheck2 = new Map([[55, 66]]); // With default values

console.log(mapCheck1.set('check', 10));
console.log(mapCheck2.has(55));
console.log(mapCheck1.get('check'));

// Example 3 ------------------------------------------
// !Important Usecase
// type ApiResponse <Data extends object = {status: number}> = { // to not allow anything beside object
type ApiResponse<Data = { status: number }> = {
	data: Data;
	isLoading: boolean;
};
// Overwriting the default
const userResponse: ApiResponse<{ name: string; age: number }> = {
	data: {
		name: 'Kalpana',
		age: 25,
	},
	isLoading: false,
};
// OR
const blogResponse: ApiResponse<string> = {
	data: 'Ladki Beautiful',
	isLoading: false,
};
// default
const statusResponse: ApiResponse = {
	data: {
		status: 200,
	},
	isLoading: false,
};
