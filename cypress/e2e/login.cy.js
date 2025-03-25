describe('Login', () =>{
    // describle: funcionalidade que está sendo testada
    it('Login com sucesso', () => {
        //get () - encontrar ou selecionar elementos
        cy.visit('/').get('.header-logo')

        //contains() - para encontrar elementos *por texto* onde geralmente diminuimos o escopo com um get()
        //contains é para texto
        cy.get('#top_header').contains('Login')

        //find() é para encontrar elementos
        cy.get('#top_header').find('.fa-user')
        // ponto (.) é para classes (#) é para id

        //alis
        //as () --- criar apelidos para (atalhos) para grandes comandos
        cy.get('#top_header').as('cabecalho')//criando atalho

        cy.get('@cabecalho').contains('Cadastro')//utlizando atalho


    })
})