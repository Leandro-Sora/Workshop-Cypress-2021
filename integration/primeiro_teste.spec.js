/// <reference types = "cypress" />

context('Validar Menus', () => {
    it('clicando no link comprar deve direcionar para a pagina de compra', () => {
        cy.visit('http:lojaebac.ebaconline.art.br/')
        cy.get('#primary-menu > .menu=item-629 > a').contains('Comprar')
        cy.get('#primary-menu > .menu=item-629 > a').click()
        cy.contains('Produtos')
    });
});