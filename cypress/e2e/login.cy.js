describe('Login', () =>{
    // describle: funcionalidade que está sendo testada
    it('Login com sucesso', () => {
        //get () - encontrar ou selecionar elementos
        cy.visit('/').get('.header-logo')

        //contains() - para encontrar elementos por texto onde geralmente diminuimos o escopo com um get()
        cy.get('#top_header').contains('Login')

        //find()
        cy.get('#top_header').find('.fa-user')


        //as () - alias
    })
})