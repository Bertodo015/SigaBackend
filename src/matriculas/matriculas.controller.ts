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
import { MatriculasService } from './matriculas.service';
// Define a rota base do controller como 'usuarios', ou seja, todas as rotas abaixo começarão com / usuarios
@Controller('matriculas')
export class MatriculasController {
    // Injeta o serviço de usuários através do construtor
    constructor(private readonly matriculasService: MatriculasService) { }
    // Rota POST /usuarios → cria um novo usuário
    @Post()
    create(@Body() body: any) {
// Chama o método create() do service, passando o corpo da requisição como dados
        return this.matriculasService.create(body);
    }
    // Rota GET /usuarios → lista todos os usuários
    @Get()
    findAll() {
        // Chama o método findAll() do service para retornar todos os usuários
        return this.matriculasService.findAll();
    }
    // Rota GET /usuarios/:id → busca um usuário específico por ID
    @Get(':fk_disciplinas_id_fk_estudantes_fk_usuarios_id')
    findOne(
        @Param('fk_disciplinas_id') fk_disciplinas_id: string,
        @Param('fk_estudantes_fk_usuarios_id') fk_estudantes_fk_usuarios_id: string
    ) {
        // Chama o método findOne() do service, convertendo o ID para número
        return this.matriculasService.findOne(
            +fk_disciplinas_id,
            +fk_estudantes_fk_usuarios_id
        );
    }
    // Rota PUT /usuarios/:id → atualiza um usuário por ID
    @Put(':fk_disciplinas_id_fk_estudantes_fk_usuarios_id')
    update(
        @Param('fk_disciplinas_id') fk_disciplinas_id: string,
        @Param('fk_estudantes_fk_usuarios_id') fk_estudantes_fk_usuarios_id: string,
        @Body() body: any) {
// Chama o método update() do service, passando o ID (como número) e os novos dados
        return this.matriculasService.update(
            +fk_disciplinas_id,
            +fk_estudantes_fk_usuarios_id,
            body
        );
    }
    // Rota DELETE /usuarios/:id → remove um usuário por ID
    @Delete(':fk_disciplinas_id_fk_estudantes_fk_usuarios_id')
    remove(
        @Param('fk_disciplinas_id') fk_disciplinas_id: string,
        @Param('fk_estudantes_fk_usuarios_id') fk_estudantes_fk_usuarios_id: string
       ) {
        // Chama o método remove() do service, convertendo o ID para número
        return this.matriculasService.remove(
            +fk_disciplinas_id,
            +fk_estudantes_fk_usuarios_id
        );
    }
}