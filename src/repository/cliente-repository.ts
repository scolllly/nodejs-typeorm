import { Cliente } from "../entity/cliente";
import { createConnection, getConnection } from "typeorm";

export class ClienteRepository {

    constructor() {

        createConnection().then(connection => {
        }).catch(error => console.log(error));
        
    }

    getClienteRepository(){
        return getConnection().getRepository(Cliente)

    }

    /*
    create(cliente: Cliente): Promise<Cliente> {
        return getConnection().getRepository(Cliente).save(cliente);
        }

    readAll(): Promise<Cliente[]> {
        return getConnection().getRepository(Cliente).find();
        }

    readById(id: number): Promise<Cliente | undefined> {
        return getConnection().getRepository(Cliente).findOne(id);
    }

    update(id: number, nuevosDatosCliente: Cliente): Promise<UpdateResult> {
        return getConnection().getRepository(Cliente).update({id: idCliente}, nuevosDatosCliente);
        }

    eliminarCliente(idCliente: string): Promise<DeleteResult> {
        return getConnection().getRepository(Cliente).delete({id: idCliente});
        }*/
}