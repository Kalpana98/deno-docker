console.log('---------------Interfaces---------------');

interface Person {
	name: string;
	age: number;
}

// extends
interface Address extends Person {
	city: string;
}

// Merges interfaces defined twice
interface Address {
	country: string;
}

function getDetails(a: Address): string {
	return `Name: ${a.name}\nCountry: ${a.country}`;
}

const person1: Address = {
	name: 'Kalpana',
	age: 25,
	city: 'Abu',
	country: 'India',
};

console.log(getDetails(person1));
