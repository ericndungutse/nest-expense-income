// In NestJS, Data Transfer Objects (DTOs) are used to define the shape of data for various operations, such as creating or updating entities. However, it's common to have similar properties between DTOs for creating and updating entities, which can lead to redundancy in your code.
import { IsNumber, IsString, IsPositive, IsNotEmpty, IsOptional } from "class-validator";
export class CreateReportDTO{
    @IsNumber()
    @IsPositive()
    amount:number

    @IsString()
    @IsNotEmpty()
    source: string;
}

export class UpdateReportDTO{
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount: number

    @IsOptional()
    @IsString()
    source:string
}