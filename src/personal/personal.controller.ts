import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { CurpGuard } from 'src/guards/curp/curp.guard';

@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Post('/crearPersonal')
  @UseGuards(CurpGuard)
  async create(@Body() createPersonalDto: CreatePersonalDto) {

    try{
      return await this.personalService.create(createPersonalDto);
    }catch(error){
      console.log(error);
      return error;
    }
    
  }

  @Get('/obtenerPersonal')
  async findAll() {
    try{
      return await this.personalService.findAll();
    }catch(error){
      console.log(error);
      return error;
    }

  }

  @Get('/obtenerPersonal/:id')
  async findOne(@Param('id') id: string) {

    try{
      return await this.personalService.findOne(+id);
    }catch(error){
      console.log(error);
      return error;
    }

  }

  @Put('/modificarPersonal/:id')
  async update(@Param('id') id: string, @Body() updatePersonalDto: UpdatePersonalDto) {

    try{
      return await this.personalService.update(+id, updatePersonalDto);
    }catch(error){
      console.log(error);
      return error;
    } 
    
  }

  @Delete('/eliminarPersonal/:id')
  remove(@Param('id') id: string) {
    try{
      return this.personalService.remove(+id);
    }catch(error){
      console.log(error);
      return error;
    }

  }
}
