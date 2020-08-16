///<reference types="cypress"/>

describe("Erail suite", () => {


    it("Learn WebTable", () => {


        cy.visit("https://erail.in/")

        cy.get("#txtStationFrom").clear().type("MAS").typeTab();

        cy.get("#txtStationTo").clear().type("TPJ").typeTab();

        //a method from cypress to check a checkbox, click also work
        cy.get("#chkSelectDateOnly").check();


        // finding number of rows
        /*  cy.get("table[class='DataTable TrainList TrainListHeader']").find('tr').then(list =>{
 
           let tablerows =  Cypress.$(list).length; 
 
           cy.log(tablerows)
         }) */

        // find rows and assigning to a alias
        cy.get("table[class='DataTable TrainList TrainListHeader']").find('tr').as('tablerows')
        cy.get("@tablerows").then(list => {

            let tablerows = Cypress.$(list).length;

            cy.log(tablerows)
        })

        // findding table columns

        cy.get("@tablerows").each(($tr, index, $trs) => {

            const numberofcolumns= $tr.find('td').length

            cy.log("number of columns",numberofcolumns)

        })




    })


    Cypress.on('uncaught:exception', (err, runnable) => {

        return false;

    })


})