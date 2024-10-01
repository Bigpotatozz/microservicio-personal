import { Injectable } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Personal } from './entities/personal.entity';

@Injectable()
export class PersonalService {


  constructor(@InjectModel(Personal) private personal: typeof Personal){}
  async create(createPersonalDto: CreatePersonalDto) {
    
    try{

      const personal = await this.personal.create({nombre: createPersonalDto.nombre,
                                                  email: createPersonalDto.email,
                                                  telefono: createPersonalDto.telefono,
                                                  curp: createPersonalDto.curp,
                                                  tipo_contrato: createPersonalDto.tipo_contrato,
                                                  fecha_ingreso: new Date(),
                                                  area: createPersonalDto.area
      })

      const usuario_personal = await fetch('http://localhost:3001/usuario/crearUsuario',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombre: createPersonalDto.nombre, 
                              email: createPersonalDto.email,
                            contrasenia: createPersonalDto.curp,
                            rol: createPersonalDto.area}),
      });

      return {message: 'Personal creado', personal: personal};

    }catch(error){
      console.log(error);
      return error;
    }
  }

  async findAll() {
   
    try{

      const personal = await this.personal.findAll({where: {estatus: true}});
      if(!personal){
        return {message: 'No hay personal registrado'};
      }
      return personal;

    }catch(error){
      console.log(error);
      return error;
    }
  }

  async findOne(id: number) {
    
    try{

      const personal = await this.personal.findByPk(id);
      if(!personal){
        return {message: 'No se encontro el personal'};
      }

      return personal;



    }catch(error){
      console.log(error);
      return error;
    }
  }

  async update(id: number, updatePersonalDto: UpdatePersonalDto) {
  
    try{
      
      const updated_personal = await this.personal.update({nombre: updatePersonalDto.nombre, 
                                            telefono: updatePersonalDto.telefono,
                                            tipo_contrato: updatePersonalDto.tipo_contrato,
                                            area: updatePersonalDto.area}, {where: {id_empleado: id}});

      if(!updated_personal){
        return {message: 'No se pudo actualizar el personal'};
      }

      return {message: 'Personal actualizado'};
                                            
      
    }catch(error){  
      console.log(error);
      return error;
    }
  }

  async remove(id: number) {

    try{

      const deleted_personal =  await this.personal.update({estatus: false}, {where: {id_empleado: id}});

      if(!deleted_personal){
        return {message: 'No se pudo eliminar el personal'};
      }

      return {message: 'Personal eliminado'};
    }catch(error){
      console.log(error);
      return error;
    }
  }
}
