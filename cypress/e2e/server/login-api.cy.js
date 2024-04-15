describe('testes em API', () => {
    context('Testes em rotas com usuário autorizado', () => {
        it('GET via url front para teste em resposta da home', () => {
            cy.loginApi('clinica@gmail.com', '4321')
            cy.request('GET', '/').should((response) => {
                // expect(response.status).to.eq(200)
            })
        })

        it('Deve verificar se o token de autenticação é retornado após login via POST na API', () => {
            cy.get('@token').should('exist');
        })
    });

    context('Validações em respostas da API', ()=>{
      it('Requisição incorreta em criação de especialista', ()=>{
            cy.request({
                method: 'POST',
                url: 'http://localhost:8080/clinica',
                body: {
                    nome: 'Camila',
                    email: 'camila123@exemplo',
                },
            }).then((response)=>{
                // expect(response.status).to.eq(500)
                expect(response.body).to.have.property('message')
            })

        })

    })

})
