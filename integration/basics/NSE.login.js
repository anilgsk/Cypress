///<reference types="cypress"/>

//testSuite
describe("NSE Login Automation", ()=>{



    //testCase
    it("Login to NSELogin",()=>{

        //load URL
        cy.visit('https://world.wallstreetenglish.com')

        //find username and type text
        cy.get('#login-user-name').type('1.rom05.bs')

        //find password and type text
        cy.get('#login-password').type('Pass@123')

        //find login and click login 
        cy.get('#login-submit').click()


    })

    
})