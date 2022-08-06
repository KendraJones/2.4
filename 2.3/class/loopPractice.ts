var todos: Array<string> = [
    "wash the car",
    "Get groceries",
    "Go to the gym",
    "East dinner"
]

// For loops have first a declaring variable, then a statement, to check then an increment or decrement
// In this loops start at 0 with i (index), this will loop as long as there are items in the array

for(let i = 0; i < todos.length; i++){
    console.log(`Todo #${i + 1}: ${todos[i]}!`)
}

todos.forEach((todo) => {
    console.log(`You still need to ${todo}!`)
})
