import { Cliente } from "entity/cliente";
import { DeleteResult, UpdateResult } from "typeorm";
import { ClienteRepository } from "../repository/cliente-repository"

export class ClienteService {

    clienteRepository = new ClienteRepository();


    readAll(): Promise<Cliente[]> {
        return this.clienteRepository.getClienteRepository().find();
    }

    readById(id: number): Promise<Cliente | undefined> {
        return this.clienteRepository.getClienteRepository().findOne(id);
    }

    create(cliente: Cliente): Promise<Cliente> {
        return this.clienteRepository.getClienteRepository().save(cliente);
    }

    update(cliente: Cliente): Promise<Cliente> {
        return this.clienteRepository.getClienteRepository().save(cliente);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.clienteRepository.getClienteRepository().delete(id);
    }

    /*
    update(cliente: Cliente): Promise<UpdateResult> {
        return this.clienteRepository.getClienteRepository().update(cliente.id, cliente);
    }*/


}