const person = {
    firstName: 'Web',
    lastName: 'Development',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Fullstack Web-Developer';

console.log(person);

// getters => access properties
// setters => change (mutate) them