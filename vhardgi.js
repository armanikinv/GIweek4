constructor(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
};

exercise(){
    console.log("Running is fun");
}
fetchjob(){
    console.log('This is ${this.name} and their job is ${this.job}')
}

let person1= new Person("Armani", 20, "Bum")
person1.exercise();
person1.fetchjob();