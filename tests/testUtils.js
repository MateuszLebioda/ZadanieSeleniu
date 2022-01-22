const { Builder, By } = require("selenium-webdriver");
const { ROZNICA } = require("../const");

getNewDriver = async () => {
  return await new Builder().forBrowser("firefox").build();
};

initData = async (config) => {
  let driver = await getNewDriver();
  await driver.get("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
  await driver.findElement(By.id("inputEmail3")).sendKeys("Imie");
  await driver.findElement(By.id("inputPassword3")).sendKeys("Nazwisko");
  await driver.findElement(By.id("dataU")).sendKeys(config.date);
  (await config.parent) && driver.findElement(By.id("rodzice")).click();
  (await config.doctor) && driver.findElement(By.id("lekarz")).click();
  await driver.findElement(By.className("btn btn-default")).click();
  return driver;
};

checkGroupTest = async (config, alertMessage) => {
  let driver = await initData(config);
  await handleFirstAlert(driver);
  await driver.sleep(300);
  let pass = (await driver.switchTo().alert().getText()) === alertMessage;
  await driver.quit();
  return pass;
};

handleFirstAlert = async (driver) => {
  let message = await driver.switchTo().alert().getText();

  if (message.startsWith(ROZNICA)) {
    await driver.switchTo().alert().accept();
  }
};

module.exports = {
  getNewDriver,
  initData,
  handleFirstAlert,
  checkGroupTest,
};
