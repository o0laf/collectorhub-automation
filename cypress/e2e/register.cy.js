import RegisterPage from '../pages/RegisterPage';

describe('Register page', () => {
  const registerPage = new RegisterPage();
  const validPassword = 'Str0ng-Pass#2026';

  beforeEach(() => {
    registerPage.visit();
  });

  it('registers a new user and goes to the feed', () => {
    const uniqueEmail = `user${Date.now()}@test.com`;

    const feedPage = registerPage.register(
      'Test User',
      uniqueEmail,
      validPassword,
      validPassword
    );

    feedPage.getCurrentUrl().should('include', '/feed');
  });

  it('shows an error when the email is already registered', () => {
    registerPage.registerWithInvalidData(
      'Test User',
      'demo@collectorhub.com',
      validPassword,
      validPassword
    );

    registerPage.getEmailError().should('be.visible');
    registerPage.getCurrentUrl().should('include', '/register');
  });

  it('shows an error when the passwords do not match', () => {
    registerPage.registerWithInvalidData(
      'Test User',
      `user${Date.now()}@test.com`,
      validPassword,
      'Different-Pass#1'
    );

    registerPage.getPasswordError().should('be.visible');
    registerPage.getCurrentUrl().should('include', '/register');
  });

  it('does not submit the form when fields are empty', () => {
    registerPage.submitEmptyForm();

    registerPage.getNameInput().should('match', ':invalid');
    registerPage.getCurrentUrl().should('include', '/register');
  });
});