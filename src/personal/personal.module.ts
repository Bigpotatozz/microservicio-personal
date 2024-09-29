import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Personal } from './entities/personal.entity';

@Module({
  imports: [SequelizeModule.forFeature([Personal])],
  controllers: [PersonalController],
  providers: [PersonalService],
})
export class PersonalModule {}
