function ageDistribution(persons) {
    let result = new Map();
    for (let person of persons) {
        let age = person.age;
        let count = result.get(age) || 0;
        result.set(age, count + 1);
    }
    return result
}

function groupByAge(persons) {
    let result = new Map();
    for (let person of persons) {
        let age = person.age;
        let group = result.get(age) || [];
        group.push(person);
        result.set(age, group);
    }
    return result
}

let people = [
    { name: "Bob", age: 21 },
    { name: "Sam", age: 28 },
    { name: "Ann", age: 21 },
    { name: "Joe", age: 22 },
    { name: "Ben", age: 28 },
]

console.log(ageDistribution(people));
console.log(groupByAge(people));

module.exports = {
    ageDistribution, groupByAge
}