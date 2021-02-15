function myfirstFunction(greeting){
    return(greeting)
} 

// console.log(myfirstFunction("Hello"))

const mySecondFunction = () => {console.log("hello there!")}


//call back
function sayHiLater(anyFunctionReferance){
    
    anyFunctionReferance()
}

sayHiLater(() => { console.log("hi") })
sayHiLater(() => { console.log("hello") })

function interact(genericInteration, name) {
    console.log(genericInteration(name))
}

const poke = (name) => `Poke ${name}`
interact(poke,"itai")

interact((name)=>`hug ${name}`, "someone")