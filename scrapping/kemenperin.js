const { Builder, By, Key } = require("selenium-webdriver");

const sKemenperin = async (req, res) => {
  const tempData = [];
  const driver = await new Builder().forBrowser("chrome").build();
  const start = req.query.start || 1;
  const end = req.query.end || 1;

  try {
    for (let i = parseInt(start); i <= parseInt(end); i++) {
      await driver.get(
        "https://kemenperin.go.id/direktori-perusahaan?what=&prov=&hal=" + i
      );

      const lengthContent = await driver.executeScript(
        "return document.evaluate('count(//tbody/tr)', document, null, XPathResult.NUMBER_TYPE, null).numberValue"
      );

      for (let i = 1; i <= lengthContent; i++) {
        const text = await driver.findElement(
          By.xpath(`//tbody/tr[${i}]/td[2]`)
        );
        const textSplit = (await text.getText()).split("\n");

        tempData.push({
          namaPerusahaan: textSplit[0],
          alamatPerusahaan: textSplit[1],
        });
      }
    }
    await driver.quit();
  } catch (err) {
    console.log(err);
  }

  res.json({ data: tempData });
};

module.exports = { sKemenperin };
