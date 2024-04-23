export class LocalProfileApi {
    get() {
        return new Promise(resolve => resolve({
            id: 'ad',
            accountNumber: 123456789123456789123456789,
            city: 'Odesa',
            createdAt: (new Date()).toLocaleDateString(),
            updatedAt: (new Date()).toLocaleDateString(),
            firstName: 'Illia',
            lastName: "Serbin",
            fathersName: "Oleksiyovich",
            houseNumber: 1,
            phoneNumber: "066-736-37-44",
            kveds: ['62.01'],
            privateTaxNumber: 1234567890,
            roomNumber: 1,
            status: "active",
            streetName: "Nyzhinska"
        }));
    }
    update(id, payload) {
        return new Promise(resolve => resolve({
            id: 'ad',
            accountNumber: 123456789123456789123456789,
            city: 'Odesa',
            createdAt: (new Date()).toLocaleDateString(),
            updatedAt: (new Date()).toLocaleDateString(),
            firstName: 'Illia',
            lastName: "Serbin",
            fathersName: "Oleksiyovich",
            houseNumber: 1,
            phoneNumber: "066-736-37-44",
            kveds: ['62.01'],
            privateTaxNumber: 1234567890,
            roomNumber: 1,
            status: "active",
            streetName: "Nyzhinska"
        }));
    }
    create(payload) {
        return new Promise(resolve => resolve({
            id: 'ad',
            accountNumber: 123456789123456789123456789,
            city: 'Odesa',
            createdAt: (new Date()).toLocaleDateString(),
            updatedAt: (new Date()).toLocaleDateString(),
            firstName: 'Illia',
            lastName: "Serbin",
            fathersName: "Oleksiyovich",
            houseNumber: 1,
            phoneNumber: "066-736-37-44",
            kveds: ['62.01'],
            privateTaxNumber: 1234567890,
            roomNumber: 1,
            status: "active",
            streetName: "Nyzhinska"
        }));
    }
}
//# sourceMappingURL=index.js.map