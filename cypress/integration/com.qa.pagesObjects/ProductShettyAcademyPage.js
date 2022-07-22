class ProductShettyAcademyPage

{

getLoginSuccessMessage(){
    return cy.get('.ng-trigger')
}

getLogOutBtn(){
    return cy.get(':nth-child(5) > .btn').click()
}

}

export default ProductShettyAcademyPage