// Importa o decorator Injectable do NestJS, que permite que essa classe seja injetada como dependência em outros lugares(como o controller)
import { Injectable } from '@nestjs/common';
    // Importa o PrismaClient, que é o cliente gerado pelo Prisma para interagir com o banco de dados
import { PrismaClient } from '@prisma/client';
// Cria uma instância do PrismaClient para acessar o banco
const prisma = new PrismaClient();
// Marca essa classe como um "serviço injetável" no NestJS
@Injectable()
export class ProfessoresService {
    // Método para criar um novo usuário no banco de dados
    async create(data: any) {
        // Chama o método `create` do Prisma, passando os dados recebidos
        // `data` deve conter os campos obrigatórios definidos no schema.prisma
        return await prisma.professor.create({ data });
    }
    // Método para buscar todos os usuários cadastrados
    async findAll() {
    // Utiliza `findMany` do Prisma para retornar todos os registros da tabela`usuario`
        return await prisma.professor.findMany();
    }
    // Método para buscar um único usuário pelo ID
    async findOne(siape: number) {
    // Utiliza `findUnique` com filtro `where` para buscar um usuário com o ID específico
        return await prisma.professor.findUnique({ where: { siape } });
        //                                                  id dando erro
    }
    // Método para atualizar um usuário com base no ID
    async update(siape: number, data: any) {
    // Usa o método `update` do Prisma, passando o ID e os novos dados a serem atualizados
        return await prisma.professor.update({
            where: { siape }, // Identifica qual usuário atualizar
            data, // Dados que serão atualizados
        });
    }
    // Método para deletar (remover) um usuário com base no ID
    async remove(siape: number) {
    // Chama `delete` passando o ID para remover o usuário correspondente da tabela
        return await prisma.professor.delete({ where: { siape } });
    }
}