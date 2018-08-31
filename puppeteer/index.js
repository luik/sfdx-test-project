const certName = 'oauth4';
const puppeteer = require('puppeteer');
const waitSpan = 2000;

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('SCRATCH_ORG_URL');
  await page.waitForSelector('#setupLink');
  await page.click('#setupLink');
  await page.type('#setupSearch', 'cer');
  await page.waitFor(waitSpan);
  await page.waitForSelector('#CertificatesAndKeysManagement_font');
  await page.click('#CertificatesAndKeysManagement_font');
  console.log('00')
  await page.waitFor(waitSpan);
  await page.waitForSelector('input[name="new"]');
  await page.click('input[name="new"]');
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
