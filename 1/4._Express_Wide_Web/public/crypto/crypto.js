// $.getJSON('https://api.coinlore.net/api/ticker/?id=90', (data) =>{
//     console.log(data)
//     $('#bitcoin-value').append(`= ${data[0].price_usd}$`)
// })

// $.getJSON('https://api.coinlore.net/api/ticker/?id=80', (data) =>{
//     console.log(data[0])
//     document.getElementById('ethereum-value').append(`= ${data[0].price_usd}$`)
// })



// fetch('https://api.coinlore.net/api/ticker/?id=90').
//     then(response => response.json()).
//     then(result => {
//         const paragraph = document.getElementById("bitcoin-value")
//         paragraph.innerText = `${result[0].price_usd}$`
//     })


// fetch('https://api.coinlore.net/api/ticker/?id=80').
//     then(response => response.json()).
//     then(result => {
//         const paragraph = document.getElementById("ethereum-value")
//         paragraph.innerText = `${result[0].price_usd}$`
//     })

(async function(){
    const response = await fetch('https://api.coinlore.net/api/ticker/?id=80')
    const result = await response.json()
    const paragraph = document.getElementById("ethereum-value")
        paragraph.innerText = `${result[0].price_usd}$`
})

