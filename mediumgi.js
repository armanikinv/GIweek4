const cutPizzaSlices = (numberOfSlices) => {
    return ( (numberOfPeople) => {
        const eachShare = numberOfSlices/numberOfPeople
        console.log("Each person gets " + eachShare + "slices ")
    }

    )
}
const sharePizza = cutPizzaSlices(8)
sharePizza(2)