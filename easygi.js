const exercise = (exerciseString) => {
    return(() => {
        return "Exercise is: " + exerciseString
    }
    )
}

let userInput = "swimming"
const swimming = exercise(userInput)
console.log(swimming())