import { Cliente } from 'entity/cliente';
import express from 'express';
import {Request,Response} from 'express';
import { ClienteService } from './service/cliente-service';
// import productRepository from 'repository/cliente-repository';
import { createConnection, Repository } from 'typeorm';

const server = express();
const port = process.env.PORT || 8080

//midleware
server.use(express.json());

// Routes
const clienteService = new ClienteService();

server.get('/', async (req: Request, res: Response) => {
    let clienteLista =  await clienteService.readAll();
    // console.log(clienteLista);
    res.json(clienteLista);
});

server.get('/:id', async (req: Request, res: Response) => {
    let cliente =  await clienteService.readById(parseInt(req.params.id));
    // console.log(cliente);
    res.json(cliente);
});

server.post('/', async (req: Request, res: Response) => {
    let cliente: Cliente =  req.body;
    let clienteBd =  await clienteService.create(cliente);
    // console.log(clienteBd);
    res.json(clienteBd);
});

server.put('/', async (req: Request, res: Response) => {
    let cliente: Cliente =  req.body;
    let clienteBd =  await clienteService.update(cliente);
    // console.log(clienteBd);
    res.json(clienteBd);
});

server.delete('/:id', async (req: Request, res: Response) => {
    let cliente = await clienteService.delete(parseInt(req.params.id));
    // console.log(clienteBd);
    res.json("Cliente eliminado");
});

// Up server
server.listen(port, () => {
    console.log("Server init port: " + port);
});


