
///<reference types="cypress"/>

describe("UI Bank registration Suite", ()=>{


    it("UI Bank Registration", ()=>{


        cy.visit("https://uibank.uipath.com/register-account")

        cy.get("input#firstName").type("ANil Kumar");

        cy.get("select#title").select("Mr");

        cy.get("#middleName").type("Gurram Konda");

        cy.get("#lastName").type("Sohaan");

        cy.get("#sex").select("Male");

        cy.get("input[id='age']").type("12/12/88");

        cy.get("#maritalStatus").select("Married");

        cy.get("#numberOfDependents").type("4");

        cy.get("#username").type("anil.gsk");

        cy.get("#email").type("anil.gsk@gmail.com");

        cy.get("#password").type("Test@123#");

        cy.xpath("//button[text()='Register']").click({force:true});



    })

    Cypress.on('uncaught:exception',(err, runnable)=>{


        return false

    })


















})