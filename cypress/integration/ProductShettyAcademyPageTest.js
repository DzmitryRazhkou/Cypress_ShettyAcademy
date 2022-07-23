import RegisterShettyAcademyPage from "./com.qa.pagesObjects/RegisterShettyAcademyPage";
import ProductShettyAcademyPage from "./com.qa.pagesObjects/ProductShettyAcademyPage";
import { faker } from "@faker-js/faker";

describe("Shetty Academy Product Page Test", () => {
  let userDetails;
  let productDetails;
  before(() => {
    cy.fixture("registerPage.json").then((user) => {
      userDetails = user;
    });
    cy.fixture("productPage.json").then((product) => {
      productDetails = product;
    });

    cy.launch();
  });

  after(function () {
    cy.tearDown();
  });

  it.only("Search product", () => {
    const productShettyAcademyPage = new ProductShettyAcademyPage();

    cy.login(userDetails.email, userDetails.password);

    cy.title().should("eq", userDetails.pageTitle);
    cy.log(" =====> Lets Shop <===== ");
    productShettyAcademyPage
      .getSearchField(productDetails.product)
      .type("{enter}");
    cy.wait(2000);
    productShettyAcademyPage.getProduct();
  });

  it("Login With Correct Credentials", () => {
    const productShettyAcademyPage = new ProductShettyAcademyPage();

    cy.login(userDetails.email, userDetails.password);

    productShettyAcademyPage.getLoginSuccessMessage().then(($div) => {
      const loginSuccessMessageText = $div.text();
      expect(loginSuccessMessageText.includes("Login Successfully")).to.be.true;
      cy.log("Login success message is: " + loginSuccessMessageText);
    });

    cy.logout();
  });
});
