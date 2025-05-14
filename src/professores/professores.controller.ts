// Importa os decorators e utilitários do NestJS para criar o controller e as rotas HTTP
import {
    Controller, // Marca a classe como um Controller
    Get, // Define rotas GET (ler dados)
    Post, // Define rotas POST (criar dados)
    Body, // Captura o corpo da requisição (dados enviados via POST/PUT)
Param, // Captura parâmetros da URL (ex: /usuarios/:id)
    Put, // Define rotas PUT (atualizar dados)
    Delete // Define rotas DELETE (remover dados)
} from '@nestjs/common';
// Importa o serviço de usuários, que contém a lógica de negócio
import { ProfessoresService } from './professores.service';
// Define a rota base do controller como 'usuarios', ou seja, todas as rotas abaixo começarão com / usuarios
@Controller('professores')
export class ProfessoresController {
    // Injeta o serviço de usuários através do construtor
    constructor(private readonly professoresService: ProfessoresService) { }
    // Rota POST /usuarios → cria um novo usuário
    @Post()
    create(@Body() body: any) {
// Chama o método create() do service, passando o corpo da requisição como dados
        return this.professoresService.create(body);
    }
    // Rota GET /usuarios → lista todos os usuários
    @Get()
    findAll() {
        // Chama o método findAll() do service para retornar todos os usuários
        return this.professoresService.findAll();
    }
    // Rota GET /usuarios/:id → busca um usuário específico por ID
    @Get(':id')
    findOne(@Param('id') id: string) {
        // Chama o método findOne() do service, convertendo o ID para número
        return this.professoresService.findOne(+id);
    }
    // Rota PUT /usuarios/:id → atualiza um usuário por ID
    @Put(':id')
    update(@Param('id') id: string, @Body() body: any) {
// Chama o método update() do service, passando o ID (como número) e os novos dados
        return this.professoresService.update(+id, body);
    }
    // Rota DELETE /usuarios/:id → remove um usuário por ID
    @Delete(':id')
    remove(@Param('id') id: string) {
        // Chama o método remove() do service, convertendo o ID para número
        return this.professoresService.remove(+id);
    }
}