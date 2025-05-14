import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class MatriculasService {
    async create(data: any) {
        return await prisma.matriculaSe.create({ data });
    }

    async findAll() {
        return await prisma.matriculaSe.findMany();
    }

    async findOne(fk_disciplinas_id: number, fk_estudantes_fk_usuarios_id: number) {
        return await prisma.matriculaSe.findUnique({
            where: {
                fk_disciplinas_id_fk_estudantes_fk_usuarios_id: {
                    fk_disciplinas_id,
                    fk_estudantes_fk_usuarios_id
                }
            }
        });
    }

    async update(fk_disciplinas_id: number, fk_estudantes_fk_usuarios_id: number, data: any) {
        return await prisma.matriculaSe.update({
            where: {
                fk_disciplinas_id_fk_estudantes_fk_usuarios_id: {
                    fk_disciplinas_id,
                    fk_estudantes_fk_usuarios_id
                }
            },
            data,
        });
    }

    async remove(fk_disciplinas_id: number, fk_estudantes_fk_usuarios_id: number) {
        return await prisma.matriculaSe.delete({
            where: {
                fk_disciplinas_id_fk_estudantes_fk_usuarios_id: {
                    fk_disciplinas_id,
                    fk_estudantes_fk_usuarios_id
                }
            }
        });
    }
}
