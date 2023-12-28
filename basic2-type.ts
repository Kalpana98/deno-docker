console.log('---------------Types---------------');
type AA = {
	name: string;
	age: number;
};
type BB = {
	name: string;
	city: string;
};

// Union type
type ABUnion = AA | BB;

// Intersection type
type ABIntersection = AA & BB;

// Either (AA whole) or (BB whole) or (AA and BB whole)
const union: ABUnion = {
	name: 'Kalpana',
	age: 25,
	city: 'Mount',
};

// All properties from AA and BB
const intersection: ABIntersection = {
	name: 'Kalpu',
	age: 25,
	city: 'Abu',
};

function getData(a: object) {
	return a;
}
console.log({ union, intersection });
