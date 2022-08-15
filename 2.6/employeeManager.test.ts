import { Builder, By, Capabilities, until, WebDriver, WebElement } from "selenium-webdriver";
import { urlContains } from "selenium-webdriver/lib/until";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
      header: By = By.css('.titleText')
      addEmployee: By = By.xpath('//li[@name="addEmployee"]')
      newEmployee: By = By.xpath('//li[@name="employee11"]')
      nameInput: By = By.css('.nameEntry')
      phoneInput: By = By.css('.phoneEntry')
      titleInput: By = By.css('.titleEntry')
      constructor(driver: WebDriver, url: string) {
        this.driver = driver
        this.url = url
      };
      async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.header))
      };
  };

  const emPage = new employeePage(driver);

  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await employeePage.navigate();
      });
      afterAll(async () => {
          await driver.quit()
      });
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(emPage.header))
          await driver.findElement(emPage.addEmployee).click()
          await driver.findElement(emPage.newEmployee).click()
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).clear()
          await driver.findElement(emPage.nameInput).sendKeys("Change this")
          await driver.findElement(emPage.phoneInput).click()
          await driver.findElement(emPage.phoneInput).clear()
          await driver.findElement(emPage.phoneInput).sendKeys("Change this")
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput).clear()
          await driver.findElement(emPage.titleInput).sendKeys("Change this")
  });

});