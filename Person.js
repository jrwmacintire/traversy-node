class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    greeting() {
        console.log(`Name: ${this.name} | age: ${this.age}`)
    }
}

module.exports = Person;