var faker = require('faker')

export default {
    deliver: function () {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()


        var data = {
            name: `${firstName} ${lastName}`,
            cpf: '09637548408',
            email: faker.internet.email(firstName),
            whatsapp: '81997983066',
            address: {
                postalcode: '52110020',
                street: 'Rua Canápolis',
                number: '103',
                details: 'bloco b apt 04',
                district: 'Tamarineira',
                city_state: 'Recife/PE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}