///<reference types="cypress"/>

//const { last } = require("cypress/types/lodash")

//testSuite
describe("LeafTap Automation", ()=>{

    //testCase
    it("Login to LeafTaps",()=>{
   
        // 1. Launch URL "http://leaftaps.com/opentaps/control/login"
        cy.visit('http://leaftaps.com/opentaps/')

        //2. Enter UserName and Password Using Id Locator

        
        cy.get('#username').type('DemoSalesManager')
       
        cy.get('#password').type('crmsfa')

         
        // 3. Click on Login Button using class Locator

        cy.get('.decorativeSubmit').click()
         
        // 4. Click on CRM/SFA Link
        cy.contains('CRM/SFA').click();
         
        // 5. Click on create Lead Button
        cy.get("a:contains('Create Lead')").click({force:true})

        // 7. Enter CompanyName using css Locator

        cy.get("#createLeadForm_companyName").type("Wall Street English")

        cy.get("#createLeadForm_companyName").invoke('val').then($companyname =>{


            cy.log($companyname)
        })

        // Enter FirstName using id Locator
        cy.get("#createLeadForm_firstName").type("Anil Poineer")

         
        //  9. Enter LastName using id Locator

        cy.get("input[id='createLeadForm_lastName']").type("Test Leaf")
         
        //  10. Select value as Employee in Source Using SelectbyVisible text

        cy.get("#createLeadForm_dataSourceId>option").last().then($ele =>{

            cy.get("#createLeadForm_dataSourceId").select($ele.text())

        })
        //  11. Select value as Pay Per Click Advertising in MarketingCampaignId Using SelectbyValue

        cy.get("#createLeadForm_marketingCampaignId").select("Pay Per Click Advertising")
         
        //  12. Select value as Telecommunications from the bottom (size-2) in Industry using SelectByIndex

        cy.get("#createLeadForm_industryEnumId").select("Telecommunications")
         
        //  13. Select value as Corporation in OwnerShip field Using SelectbyIndex

        cy.get("#createLeadForm_ownershipEnumId").select("Corporation")
         
        //  14. Select value as India in Country Field Using SelectbyVisibletext

        cy.get("select[name='generalCountryGeoId']").select("India")

          
        //  15. Click on create Lead Button Using name Locator

        cy.get(".smallSubmit").click({force:true})
         
        //  16. Get the Title of the resulting Page

        cy.title().then($title =>{

            cy.log($title)


        })

    })

Cypress.on("uncaught:exception",(err, runnable)=>{

return false;

})


})