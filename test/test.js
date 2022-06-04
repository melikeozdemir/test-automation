const { By, Key, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { JavascriptError } = require("selenium-webdriver/lib/error");
require("chromedriver");
const { Origin } = require('selenium-webdriver');
require('chai').should();


 let driver = null

    describe('Obss Arama Senaryosu', async function () {
        before (async function(){
         driver = await new Builder().forBrowser("chrome").build(); 
        
        
        await driver.get("https://obss.com.tr/");
    
        driver.manage().window().maximize();
        await driver.findElement(By.id("cookieAcceptance")).click();
        await driver.findElement(By.id("search-obss")).click();
        await driver.findElement(By.name("s")).sendKeys("Automation", Key.ENTER);
     
    })  
        it("Arama sonucu doğru geldi mi?",async()=>{
            const a = await driver.findElement(By.xpath("/html/body/div[3]/div/div[2]/div/div[2]/article[1]/h2/a")).getText();
            a.should.equal('Testing & Automation');
        })
        it("Testing & Automation sayfası açıldı mı?",async()=>{
             await driver.findElement(By.xpath("/html/body/div[3]/div/div[2]/div/div[2]/article[1]/h2/a")).click();
             const pageTitle = await driver.getTitle();
             pageTitle.should.equal('Testing & Automation - OBSS Technology');
             
        })
        it("OBSS footer görüntülendi mi?",async()=>{
            await driver.actions().scroll(0, 0, 0, 5000, Origin.VIEWPORT).perform();
            const b = await driver.findElement(By.className("footer-copyright-container")).isDisplayed();
            b.should.equal(true);
       })  

        
      });



    

