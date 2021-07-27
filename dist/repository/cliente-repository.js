"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepository = void 0;
const cliente_1 = require("../entity/cliente");
const typeorm_1 = require("typeorm");
class ClienteRepository {
    constructor() {
        typeorm_1.createConnection().then(connection => {
        }).catch(error => console.log(error));
    }
    getClienteRepository() {
        return typeorm_1.getConnection().getRepository(cliente_1.Cliente);
    }
}
exports.ClienteRepository = ClienteRepository;
//# sourceMappingURL=cliente-repository.js.map