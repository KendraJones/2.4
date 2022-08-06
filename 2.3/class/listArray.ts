let firstList: Array<number> = []
let secondList: Array<string> = [
    "Elephant",
    "Lion",
    "Tiger",
    "Polar Bear",
    "Monkeys"
]

firstList.push(12345)
firstList.push(67890)
firstList.push(13579)
firstList.push(24680)

console.log("The first list is: ", firstList)
console.log("The second list is: ", secondList)

console.log("should be 12345", firstList[0])
console.log("should be Tiger", secondList[2])