class RegisterShettyAcademyPage {
  // Title of the page, headers validation:

  getLoginForm() {
    return cy.get("div.login-section-wrapper");
  }

  socialMediaLinks() {
    return cy.get("span:nth-of-type(2) a");
  }

  getEmailAcademy() {
    return cy.get(".top-tab > :nth-child(1) > a");
  }

  // Login with incorrect credentials:

  getIncorrectLoginMessage() {
    return cy.get("div[role='alertdialog']");
  }

  // Register:

  getRegisterBtn() {
    return cy.get(".btn1").click();
  }

  getFirstName(firstName) {
    return cy.get("#firstName").type(firstName).should("have.value", firstName);
  }

  getLastName(lastName) {
    return cy.get("#lastName").type(lastName).should("have.value", lastName);
  }

  getEmail(email) {
    return cy.get("#userEmail").type(email).should("have.value", email);
  }

  getPhone(phone) {
    return cy.get("#userMobile").type(phone).should("have.value", phone);
  }

  getOccupation(occupation) {
    return cy.get(".custom-select").select(occupation);
  }

  getGender() {
    return cy.get("input[value='Male']").check().should("be.checked");
  }

  getPassword(password) {
    return cy.get("#userPassword").type(password);
  }

  getConfirmPassword(password) {
    return cy.get("#confirmPassword").type(password);
  }

  getConfirmedAge() {
    return cy.get("input[type='checkbox']").check().should("be.checked");
  }

  getLoginClick() {
    cy.get("#login").click();
  }

  getSuccessRegistrationMessage() {
    return cy.get("h1.headcolor");
  }
}

export default RegisterShettyAcademyPage;
