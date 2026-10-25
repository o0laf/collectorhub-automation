import LoginPage from '../pages/LoginPage';

describe('Login page', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('logs in successfully with valid credentials', () => {
    const feedPage = loginPage.login('demo@collectorhub.com', 'password');

    feedPage.getCurrentUrl().should('include', '/feed');
  });

  it('shows an error message with invalid credentials', () => {
    loginPage.loginWithInvalidCredentials('nobody@example.com', 'wrong-password');

    loginPage.getErrorMessage().should('be.visible');
    loginPage.getCurrentUrl().should('include', '/login');
  });

  it('does not submit the form when fields are empty', () => {
    loginPage.submitEmptyForm();

    loginPage.getEmailInput().should('match', ':invalid');
    loginPage.getCurrentUrl().should('include', '/login');
  });
});