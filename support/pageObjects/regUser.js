class regUser{
    register(firstname,lastname,endereço,cidade,cep,email,telefone){
        return cy.get('#billing_first_name').type(firstname),
        cy.get('#billing_last_name').type(lastname),
        cy.get('#billing_address_1').type(endereço),
        cy.get('#billing_city').type(cidade),
        cy.get('#billing_postcode').type(cep),
        cy.get('#billing_phone').type(telefone),
        cy.get('#billing_email').type(email)
    }
}
export default new regUser()