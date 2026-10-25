import FeedPage from './FeedPage';

export default class LoginPage {
  // ---------- Selectors (private, all together at the top) ----------
  #emailInput = () => cy.get('[data-testid="login-email"]');
  #passwordInput = () => cy.get('[data-testid="login-password"]');
  #submitButton = () => cy.get('[data-testid="login-submit"]');
  #emailError = () => cy.get('[data-testid="login-email-error"]');

  // ---------- User actions ----------
  visit() {
    cy.visit('/login');
    return this; // we stay on the login page
  }

  login(email, password) {
    this.#fillForm(email, password);
    this.#submitButton().click();
    return new FeedPage(); // login takes us to the feed
  }

  loginWithInvalidCredentials(email, password) {
    this.#fillForm(email, password);
    this.#submitButton().click();
    return this; // we stay on the login page
  }

  submitEmptyForm() {
    this.#submitButton().click();
    return this; // the browser blocks the submit, we stay here
  }

  // ---------- Things the test can look at ----------
  getErrorMessage() {
    return this.#emailError();
  }

  getEmailInput() {
    return this.#emailInput();
  }

  getCurrentUrl() {
    return cy.url();
  }

  // ---------- Private helper ----------
  #fillForm(email, password) {
    this.#emailInput().clear().type(email);
    this.#passwordInput().clear().type(password);
  }
}