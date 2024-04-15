describe('testes em API', () => {
    context('Testes em rotas com usuário autorizado', () => {
        // beforeEach(() => {
        //     cy.loginApi(Cypress.env('email'), Cypress.env('senha'))

        // })
        it('get Servidor',() =>{
            cy.request('/clinica').then((response) =>{
                expect(response.status).to.eq(200)
            })

        })

        it('Deve logar com sucesso na API e armazenar o token', () => {

            let token = ""
            // Dados de login
            const reqBody = {
                "email": "clinica@gmail.com",
                "senha": "4321"
            }
        
            // Requisição para a API de login
            cy.request({
            method: 'POST',
            url: '/auth/login', // Substitua pela URL da sua API de login
            body: reqBody,
            timeout: 600000
            })
            .then((response) => {
                // Validação do status da resposta
                expect(response.status).to.equal(200);
                // Armazenamento do token
                token = response.body.token
            });
        });
        });

        // it('loginApi',()=>{
        //   const reqBody = {
        //       "email": "clinica@gmail.com",
        //       "senha": "4321"
        //   }
        //     cy.request({
        //         method: 'POST',
        //         body: reqBody,
        //         url: '/auth/login',
        //         timeout: 600000,
        //   // failOnStatusCode: false
        
        //     }).then(response =>{
        //         expect(response.status).to.eq(200);
        //         expect(response.body.auth).to.be.true;
        //         expect(response.body.rota).to.eq('/clinica');
        //         expect(response.body.token).to.exist;
        //       //   cy.wrap(response.body.token).as('token');
          
        //     })
        
        // })

        it('Cadastra clinica',()=>{
            const reqBody = 
                {
                    "planoDeSaudeAceitos":[1,2,3,4],
                    "email":"clinica@gmail.com",
                    "nome":"Clinica de Todos",
                    "senha":"4321",
                    "endereco": {
                        "cep": 76541321,
                        "rua": "Rua 45",
                        "numero": 2,
                        "complemento": "casa",
                            "estado":"Amapá"
                    }
                }
              cy.request({
                  method: 'POST',
                  url: '/clinica',
                  body: reqBody,
                  'auth': {
                    'bearer': `${token}`
                  },
                  timeout: 600000,
              }).then(response =>{
                  expect(response.status).to.eq(200)
                  expect(response.body.id).to.exist;            
              })
          
          })

        // it('GET via url front para teste em resposta da home', () => {
        //     cy.request('GET', '/', { email: "clinica@gmail.com", senha: "4321" 

        //     }).should((response) => {
        //         expect(response.status).to.eq(200)
        //     })
        // })

        // it('Deve verificar se o token de autenticação é retornado após login via POST na API', () => {
        //     cy.get('@token').should('exist');
        // })
    });

    // context('Validações em respostas da API', ()=>{
    //     // beforeEach(() =>{
    //     //     cy.loginApi(Cypress.env('email'), Cypress.env('senha'))
    //     // })

    //     it('Requisição incorreta em criação de especialista', ()=>{
    //         cy.request({
    //             method: 'POST',
    //             url: Cypress.env('api_clinica'),
    //             body: {
    //                 nome: 'Camila',
    //                 email: 'camila123@exemplo',
    //             },
    //         failOnStatusCode: false
            
    //         }).then((response)=>{
    //             expect(response.status).to.eq(500)
    //             expect(response.body).to.have.property('message')
    //         })

    //     })

    // })
