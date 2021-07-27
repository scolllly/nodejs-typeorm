"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_service_1 = require("./service/cliente-service");
const server = express_1.default();
const port = process.env.PORT || 8080;
//midleware
server.use(express_1.default.json());
// Routes
/*
const productRepository = createConnection().then(async connection => {
    const repository = await connection.getRepository(Cliente);
    return repository;
});

const productList = productRepository.find();

*/
const clienteService = new cliente_service_1.ClienteService();
server.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let clienteLista = yield clienteService.readAll();
    // console.log(clienteLista);
    res.json(clienteLista);
}));
server.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield clienteService.readById(parseInt(req.params.id));
    // console.log(cliente);
    res.json(cliente);
}));
server.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = req.body;
    let clienteBd = yield clienteService.create(cliente);
    // console.log(clienteBd);
    res.json(clienteBd);
}));
server.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = req.body;
    let clienteBd = yield clienteService.update(cliente);
    // console.log(clienteBd);
    res.json(clienteBd);
}));
server.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield clienteService.delete(parseInt(req.params.id));
    // console.log(clienteBd);
    res.json("Cliente eliminado");
}));
// Up server
server.listen(port, () => {
    console.log("Server init port: " + port);
});
//# sourceMappingURL=index.js.map