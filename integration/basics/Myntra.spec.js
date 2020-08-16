///<reference types="cypress"/>



describe("Myntra Suite", ()=>{



it("Get Polarized rectangle men sunglasses",()=>{


    //1. Navigate to Myntra website through "https://www.myntra.com/"

    cy.visit('https://myntra.com/', {
        headers: {
            "Accept-Encoding" : "gzip, deflate"  // to load header images
        }
    });

    //2. In Searchbox, enter Sunglasses and hit enter button

    cy.get("input[placeholder='Search for products, brands and more']").type("sunglasses").type("{enter}");


    //3. In Result page, filter the glasess with Brand "Polaroid".

    cy.get("input[value='Polaroid']").click({force:true}).wait(1000);


    //4. Print the Product size of 'Men Rectangle Sunglasses'.

   
    ////h4[text()='Men Rectangle Sunglasses'])[1]/following-sibling::h4/span"
    cy.get("h4:contains('Men Rectangle Sunglasses') ~h4 >span").first().then($size=>{

                cy.log($size.text())

    })

    //5. Print the Product price including the discounted price of 'Men Rectangle Sunglasses'.
    cy.get("h4:contains('Men Rectangle Sunglasses') ~div>span:last-child").first().then($element=>{

        cy.log($element.text())

})
    //6. Mouse over on the image of the first result.
    
    //7. Click on the View Similar Items button
    //8. Find the number of similar items and ensure the count is more than 5.

    









})

















})