/// <reference types= "cypress"/>


//testSuite
describe("Flipkart Automation", ()=>{
    //testCase
    it("Login to flipkart",()=>{

        //load URL
        cy.visit('https://www.flipkart.com/')

        //mouse over on electronics
        cy.contains('Electronics').trigger('mouseover').click


        cy.xpath("//a[@title='Vivo']").click();

        cy.wait(3000);

        cy.xpath("//div[text()='Price -- High to Low']").click()
        

        cy.xpath("(//select[@class='fPjUPw'])[1]").select('4000')


        cy.xpath("(//select[@class='fPjUPw'])[2]").select('10000')
        cy.xpa



        

        


    })

})