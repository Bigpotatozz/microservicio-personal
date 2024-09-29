import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonalDto } from './create-personal.dto';
import { IsEmail, IsString } from 'class-validator';

export class UpdatePersonalDto extends PartialType(CreatePersonalDto) {
    @IsString()
    nombre: string;
    @IsString()
    telefono: string;
    @IsString()
    tipo_contrato: string;
    @IsString()
    area: string;
}
