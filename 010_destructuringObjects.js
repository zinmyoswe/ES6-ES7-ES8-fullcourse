const personalInformation = {
	firstName : 'Nan',
	lastName : 'Sandar',
	city : 'Sanchaung',
	state : 'Yangon',
	zipCode : 11009
};

const {firstName: fn, lastName: ln, city, state, zipCode} = personalInformation;

console.log(`${fn} ${ln} ${city} ${state} ${zipCode}`);