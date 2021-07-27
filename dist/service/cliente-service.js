"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const cliente_repository_1 = require("../repository/cliente-repository");
class ClienteService {
    constructor() {
        this.clienteRepository = new cliente_repository_1.ClienteRepository();
        /*
        update(cliente: Cliente): Promise<UpdateResult> {
            return this.clienteRepository.getClienteRepository().update(cliente.id, cliente);
        }*/
    }
    readAll() {
        return this.clienteRepository.getClienteRepository().find();
    }
    readById(id) {
        return this.clienteRepository.getClienteRepository().findOne(id);
    }
    create(cliente) {
        return this.clienteRepository.getClienteRepository().save(cliente);
    }
    update(cliente) {
        return this.clienteRepository.getClienteRepository().save(cliente);
    }
    delete(id) {
        return this.clienteRepository.getClienteRepository().delete(id);
    }
}
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente-service.js.map