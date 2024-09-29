import { IsEmail, IsString } from "class-validator";

export class CreatePersonalDto {
    @IsString()
    nombre: string;
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    telefono: string;
    @IsString()
    curp: string;
    @IsString()
    tipo_contrato: string;
    fecha_ingreso: Date;
    @IsString()
    area: string;
}
