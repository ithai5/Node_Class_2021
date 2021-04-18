
async function redirectToGoogle (){
    //window.location.href = 'https://google.com' //redirecting by the client
    const response = await fetch('/google')
    const result = await response.json()
    window.location.href = result.url
}
