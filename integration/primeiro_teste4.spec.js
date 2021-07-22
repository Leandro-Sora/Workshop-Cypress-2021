/// <reference types = "cypress" />

context('Validar menus', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('clicando no link comprar deve direcionar para a pagina de compra', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        //ALIAS
        //cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar')
        //cy.get('#primary-menu > .menu-item-629 > a').click()
        
        cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink')
        //cy.get('@comprarMenuLink').contains('Comprar')
        //cy.get('@comprarMenuLink').click()
        
        //Combinando ações
        //cy.get('@comprarMenuLink').contains('Comprar').click()
        cy.get('@comprarMenuLink').contains('Comprar').and('have.attr', 'href').and('include', 'shop')
        cy.get('@comprarMenuLink').click()

        //cy.contains('Produtos')
        //cy.url().contains('shop')

        //Should
        cy.get('.page-title').should('contain', 'Produtos')
    });

    it('clicando no link de conta deve direcionar para a página de login/cadastro', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('.icon-user-unfollow')
        cy.url().should('contain', '/my-account-2')
    });
});