const PRICE_TAG = 'th.group';
const ICON_OK = '.idealforms-field-radio .icon'

Cypress.Commands.add('selecionarOpcaoPreco', () => {
    cy.get(PRICE_TAG).find('input[value="Platinum"]').check({force:true})
})

Cypress.Commands.add('validarEnvio', () => {
    //se o icone de ok estiver visível, então os dados foram preenchidos com sucesso
    cy.get(ICON_OK).should('be.visible')
})