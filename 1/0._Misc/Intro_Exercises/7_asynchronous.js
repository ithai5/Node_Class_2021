// promises = callbackd 
// promises has to states pending and fulfilled 
//when something is fulfilled can be in two states resolved(good) and rejected(bad) 


// new Promise ((resolve, reject)=> {
//     const date = new Date()
//     date.getMonth() >= 2 && date.getMonth()<9 ? resolve("Everything is good!") : reject("Winter is here")
// })
// .then((message => console.log(message)))
// .catch(errorMessage => console.log(errorMessage))


function myPromiseFunction() {
    return new Promise((resolve, reject) =>{
        try {
            setTimeout(()=>{
                    resolve("Everything is good")
                }, 4000)
            }
        catch {
            reject("every promise doesnt work out this way")
            }
        }
    )
}

myPromiseFunction()
    .then(message=>console.log(message))
    .catch(errorMessage=> console.log(errorMessage))

async function asyncCall (){
    const message = await myPromiseFunction()
}


