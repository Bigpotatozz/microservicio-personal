import { DataTypes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'personal',
    timestamps: false
})
export class Personal extends Model{

    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    })
    id_empleado: number;
    @Column({
        type: DataTypes.STRING
    })
    nombre: string;
    @Column({
        type: DataTypes.STRING
    })
    email: string;
    @Column({
        type: DataTypes.STRING
    })
    telefono: string;
    @Column({
        type: DataTypes.STRING
    })
    curp: string;
    @Column({
        type: DataTypes.STRING
    })
    tipo_contrato: string;
    @Column({
        type: DataTypes.DATE
    })
    fecha_ingreso: Date;
    @Column({
        type: DataTypes.STRING
    })
    area: string;
    @Column({
        type: DataTypes.BOOLEAN,
        defaultValue: true
    })
    estatus: boolean



}
