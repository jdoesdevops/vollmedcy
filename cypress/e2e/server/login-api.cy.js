// describe('testes em API', () => {
//     context('Testes em rotas com usuário autorizado', () => {
//         beforeEach(() => {
//             cy.loginApi(Cypress.env('email'), Cypress.env('senha'))

//         })
//         it('GET via url front para teste em resposta da home', () => {
//             cy.request('GET', '/', { email: "clinica@gmail.com", senha: String(4321) 

//             }).should((response) => {
//                 expect(response.status).to.eq(200)
//             })
//         })

//         it('Deve verificar se o token de autenticação é retornado após login via POST na API', () => {
//             cy.get('@token').should('exist');
//         })
//     });

//     context('Validações em respostas da API', ()=>{
//         beforeEach(() =>{
//             cy.loginApi(Cypress.env('email'), Cypress.env('senha'))
//         })

//         it('Requisição incorreta em criação de especialista', ()=>{
//             cy.request({
//                 method: 'POST',
//                 url: Cypress.env('api_clinica'),
//                 body: {
//                     nome: 'Camila',
//                     email: 'camila123@exemplo',
//                 },
//             failOnStatusCode: false
            
//             }).then((response)=>{
//                 expect(response.status).to.eq(500)
//                 expect(response.body).to.have.property('message')
//             })

//         })

//     })

// })

describe('Login API', () => {
    it('Deve logar com sucesso na API e retornar status 200', () => {
      // Dados de login
      const email = 'clinica@gmail.com';
      const senha = '4321';
  
      // Requisição para a API de login
      cy.request({
        method: 'POST',
        url: 'http://localhost:8080/auth/login', // Substitua por URL da sua API de login
        body: {
          email,
          senha
        }
      })
        .then((response) => {
          // Validação do status da resposta
          expect(response.status).to.equal(200);
  
          // Validação da estrutura da resposta
          expect(response.body).to.have.property('token');
          expect(response.body).to.have.property('usuario');
  
          // Validação dos dados do usuário
          expect(response.body.usuario.email).to.equal(email);
          // Validação de outros dados do usuário, se necessário
        });
    });
  });