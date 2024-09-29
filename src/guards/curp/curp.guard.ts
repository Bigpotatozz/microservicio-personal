import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Observable } from 'rxjs';
import { Personal } from 'src/personal/entities/personal.entity';

@Injectable()
export class CurpGuard implements CanActivate {

  constructor( @InjectModel(Personal) private personal: typeof Personal) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    
    const request = context.switchToHttp().getRequest();
    const {curp} = request.body;
    
    const valido = await this.personal.findOne({where: {curp: curp}});

    if(valido){
      return false;
    }

    return true;
  }
}
