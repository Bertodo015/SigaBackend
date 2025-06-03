import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProfessoresModule } from './professores/professores.module';
import { EstudantesModule } from './estudantes/estudantes.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { MatriculasModule } from './matriculas/matriculas.module';
import { JogosModule } from './jogos/jogos.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), UsuariosModule, ProfessoresModule, EstudantesModule, DisciplinasModule, MatriculasModule, JogosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
