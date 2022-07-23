class ProductShettyAcademyPage {
  // Login success message:

  getLoginSuccessMessage() {
    return cy.get(".ng-trigger");
  }

  getLogOutBtn() {
    return cy.get(":nth-child(5) > .btn").click();
  }

  // Search product:

  getSearchField(product) {
    return cy
      .get("#sidebar > form.ng-untouched > :nth-child(1) > .form-control")
      .type(product)
      .should("have.value", product);
  }

  getProduct() {
    return cy.get("div.card").should("have.length", 1);
  }
}

export default ProductShettyAcademyPage;
