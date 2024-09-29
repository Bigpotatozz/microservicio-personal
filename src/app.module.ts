import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalModule } from './personal/personal.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Personal } from './personal/entities/personal.entity';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
      models: [Personal]
  
    }),
    PersonalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
