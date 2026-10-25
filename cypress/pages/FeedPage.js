export default class FeedPage {
  visit() {
    cy.visit('/feed');
    return this;
  }

  getCurrentUrl() {
    return cy.url();
  }
}