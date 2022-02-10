
import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Singup', () => {

    // beforeEach(function () {

    //   cy.fixture('deliver.json').then((d) => {
    //     this.deliver = d

    //   })

    // })

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = 'AAA37548408'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessagetShouldBe('Oops! CPF inválido')

    })

    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessagetShouldBe('Oops! Email com formato inválido.')

    })

    context('Required fields', function(){

        

    })

    it('Required fields', function () {

        signup.go()
        signup.submit()
        signup.alertMessagetShouldBe('É necessário informar o nome')
        signup.alertMessagetShouldBe('É necessário informar o CPF')
        signup.alertMessagetShouldBe('É necessário informar o email')
        signup.alertMessagetShouldBe('É necessário informar o CEP')
        signup.alertMessagetShouldBe('É necessário informar o número do endereço')
        signup.alertMessagetShouldBe('Selecione o método de entrega')
        signup.alertMessagetShouldBe('Adicione uma foto da sua CNH')


    })
})