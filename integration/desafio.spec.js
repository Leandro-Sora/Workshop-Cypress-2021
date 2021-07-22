/// <reference types = "cypress" />

const data = require('../fixtures/cadastro.json')
import regUser from '../support/pageObjects/regUser'
context('Comprar um produto', () => {

    before(() => {
        //Visitar site selecionado
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Comprar o primeiro produto da loja', () => {
        //Verificar aba Compras
        cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink')
        cy.get('@comprarMenuLink').contains('Comprar').and('have.attr', 'href').and('include', 'shop')
        cy.get('@comprarMenuLink').click()

        //Possui o texto Produtos?
        cy.get('.page-title').should('contain', 'Produtos')

        //Selecionar produto
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        
        //Selecionar tamanho e cor do produto, após seleção jogar produto no carrinho
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()

        //Visualizar o carrinho 
        cy.get('.woocommerce-message > .button').click()
        //Finalizar compra
        cy.get('.checkout-button').click()
        //Realizar o cadastro e finalizar o pedido
        regUser.register(data.firstname,data.lastname,data.endereço,data.cidade,data.cep,data.email,data.telefone)
        cy.get('#place_order').click()
    });
});