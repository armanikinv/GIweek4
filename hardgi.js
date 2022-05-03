function outFunction(){
    let pi= {
        name: "VeroniaKing",
        ssn: '123-45-6789',
    };
    return function getName(){
        return pi.name
    }
}
var closureExample = outFunction();
console.log(closureExample());