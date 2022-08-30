import {GoogleWBP} from './googleWBP';
const fs = require('fs')
const google = new GoogleWBP()

test('do a search', async () => {
    await google.navigate()
    await google.search('KitKat Bar')
    let text = await google.getResults()
    expect(text).toContain('KitKat')
    await fs.writeFile(`${__dirname}/kitkat.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await fs.writeFile(`${__dirname}/kitKatScreenshots.png`, await google.driver.takeScreenshot(), "base64", (e) => {
        if (e) console.error(e)
        else console.log("Save Successful")
    })
})
afterAll(async () => {
    await google.driver.quit()
})