const certName = 'oauthjira';
const puppeteer = require('puppeteer');
const waitSpan = 4000;

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //await page.goto('SCRATCH-ORG-URL-WITH-TOKEN-GET-PARAMETER');
  await page.goto('SCRATCH-ORG-URL-WITH-TOKEN-GET-PARAMETER');
  await page.waitForSelector('#setupLink');
  await page.click('#setupLink');
  await page.waitForSelector('#setupSearch');
  await page.type('#setupSearch', 'Apps');
  await page.waitFor(waitSpan);
  await page.waitForSelector('#TabSet_font');
  await page.click('#TabSet_font');
  console.log('00')
  await page.waitFor(waitSpan);
  await page.waitForSelector('//a[text()="Confluence"]');
  await page.click('//a[text()="Confluence"]');
  console.log('11')
  await page.waitFor(waitSpan);
  await page.waitForSelector('#MasterLabel');
  await page.type('#MasterLabel', certName);
  await page.click('#DeveloperName');
  await page.click('input[name="save"]');
  console.log('22')
  await page.waitFor(waitSpan);
  await page.waitFor(waitSpan);
  await page._client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: './'
    });
  await page.waitForSelector('input[name="downloadcert"]');
  await page.click('input[name="downloadcert"]');
  await page.waitFor(waitSpan);
  console.log("taking picture");
  await page.screenshot({path: 'full.png', fullPage: true});
  await browser.close();
})();
