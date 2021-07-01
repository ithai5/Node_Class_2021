// import puppeteer
const puppeteer = require("puppeteer")
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const url = 'https://finance.yahoo.com/quote/MFT.NZ/balance-sheet?p=MFT.NZ'//&guccounter=1 //the end of &guccounter is not nessaccery and added one more link that we will need to run from
const url2 = 'https://finance.yahoo.com/quote/FLUO.ST/financials?p=FLUO.ST'
const url3 = 'https://finance.yahoo.com/quote/FLUO.ST/financials?p=FLUO.ST' 

app.post('/', async (req, res) => {
    const result = await readPage(req.body.symbol, req.body.sheet)
    res.send({'table content' : result})
})
async function readPage (symbol, sheet) {
    const url = `https://finance.yahoo.com/quote/${symbol}/${sheet}?p=${symbol}`
    console.log(url);
    //launch chromium browser 
    const browser = await puppeteer.launch() //{headless: false}
    const page = await browser.newPage()
    await page.goto(url) //redirect to the url on new tab
    await page.waitForSelector(".btn.primary") 
    await page.click('.btn.primary')// accept cookies for this seassion
    // the next to steps are needed of the url countain &guccounter=1
    //await page.waitForSelector('a') //skip to the next page
    //await page.click('a')class="W(100%) Whs(nw) Ovx(a) BdT Bdtc($seperatorColor)"
    await page.waitForSelector('button.expandPf') 
    await page.waitForTimeout(4000)
    await page.click('button.expandPf') //expand all fields in the table
    const html = await page.evaluate(() => 
        document.getElementsByClassName('W(100%) Whs(nw) Ovx(a) BdT Bdtc($seperatorColor)')[0].innerText
    )
    await browser.close();
    return await convertToJson(html)
}


function convertToJson (text) {
    console.log(text);
    text = text.split('\n')
    let json = {}
    for(let i = 0; i< text.length; i+=2){
        if(text[i] === ''){
            i--
        }
        else{
            json[`${text[i]}`]= splitValues(text[i+1])//[`${text[i+1]}`]
        }
    }
    console.log(json);
    return json
}
function splitValues(string) {
    string = string.split('\t');
    string.shift()//is it remobing the breakdown dates
    return string
}
app.listen(8080 ,() => console.log("This server is running on port: ", 8080))

