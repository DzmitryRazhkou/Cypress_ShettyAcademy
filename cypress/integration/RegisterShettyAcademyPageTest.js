import RegisterShettyAcademyPage from "./com.qa.pagesObjects/RegisterShettyAcademyPage";
import ProductShettyAcademyPage from "./com.qa.pagesObjects/ProductShettyAcademyPage";
import { faker } from '@faker-js/faker';

describe('Shetty Academy Register Page Test', () => {

    let userDetails
    before(() => {
        cy.fixture('registerPage.json').then((user) => {
            userDetails = user
        })

        cy.viewport('macbook-16');
        cy.log('User navigates on the registration page');
        cy.visit(Cypress.env('url'))
    })

    after(function(){
        cy.log('After method ')
    })

    it('Title Of Page, Headers Validation', () => {
        const registerShettyAcademyPage = new RegisterShettyAcademyPage()

        cy.title().should('eq', userDetails.pageTitle)
        cy.log(' =====> Lets Shop <===== ');

        registerShettyAcademyPage.getLoginForm().should('be.visible')
        cy.log('Login form has been appeared');

        registerShettyAcademyPage.socialMediaLinks().should('have.length', userDetails.quantity)
        cy.log('The quantity of the social media links are ' + userDetails.quantity)

        registerShettyAcademyPage.getEmailAcademy().should('have.text', userDetails.academyEmail)
        .then((element) => {
            const emailAcademyText = element.text()
            cy.log('Academy email is: ' + emailAcademyText);
        })

    })

    it('Login With Correct Credentials', () => {
        const productShettyAcademyPage = new ProductShettyAcademyPage()

        cy.login(userDetails.email, userDetails.password)

        productShettyAcademyPage.getLoginSuccessMessage().then(($div) => {
            const loginSuccessMessageText = $div.text()
            expect(loginSuccessMessageText.includes('Login Successfully')).to.be.true
              cy.log('Login success message is: ' + loginSuccessMessageText)  
            })

        cy.logout()

        })

        it('Login With Incorrect Credentials', () => {
            const registerShettyAcademyPage = new RegisterShettyAcademyPage()
    
            cy.login(userDetails.wrong_email, userDetails.wrong_password)
    
            registerShettyAcademyPage.getIncorrectLoginMessage().then(($div) => {
                const loginSuccessMessageText = $div.text()
                expect(loginSuccessMessageText.includes('Incorrect email or password.')).to.be.true
                  cy.log('Login incorrect success message is: ' + loginSuccessMessageText)  
                })

            })

        it('Register New User', () => {
                const registerShettyAcademyPage = new RegisterShettyAcademyPage()
                let firstName = faker.name.firstName()
                let lastName = faker.name.firstName()
                let email = faker.internet.email()
                let phone = faker.helpers.replaceSymbols('1#########')
                let occupation = userDetails.occupation
                let password = faker.helpers.replaceSymbols('########?l')

                registerShettyAcademyPage.getRegisterBtn()

                registerShettyAcademyPage.getFirstName(firstName)
                registerShettyAcademyPage.getLastName(lastName)
                registerShettyAcademyPage.getEmail(email)
                registerShettyAcademyPage.getPhone(phone)
                registerShettyAcademyPage.getOccupation(occupation)
                registerShettyAcademyPage.getGender()
                registerShettyAcademyPage.getPassword(password)
                registerShettyAcademyPage.getConfirmPassword(password)
                registerShettyAcademyPage.getConfirmedAge()
                registerShettyAcademyPage.getLoginClick()

                registerShettyAcademyPage.getSuccessRegistrationMessage()
                .then((ele) => {
                    const successRegistrationMessageText = ele.text()
                    expect(successRegistrationMessageText.includes('Account Created Successfully')).to.be.true
                    cy.log('Login incorrect success message is: ' + successRegistrationMessageText)  
                })

            })

        })

