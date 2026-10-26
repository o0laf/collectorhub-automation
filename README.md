# CollectorHub Automation

Pruebas E2E con Cypress y el patrón Page Object Model (POM).

## Cómo ejecutar los tests

### Prerrequisitos
- Node.js 18 o más
- La app CollectorHub corriendo en http://127.0.0.1:8000
  (`php artisan serve` y `npm run dev` en el repo del proyecto, rama `develop`)
- MongoDB prendido y datos de prueba cargados: `php artisan db:seed`
- En el `.env` de la app: `CACHE_STORE=file` y luego `php artisan config:clear`

### Instalar dependencias
npm install

### Ejecutar las pruebas
npm test

Para verlas en modo visual:
npm run cy:open

## Estructura
- `cypress/pages/` Page Objects: LoginPage, RegisterPage, ProfilePage, EditProfilePage, FeedPage
- `cypress/e2e/` Tests: login.cy.js, register.cy.js, profile.cy.js
