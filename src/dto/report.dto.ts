// In NestJS, Data Transfer Objects (DTOs) are used to define the shape of data for various operations, such as creating or updating entities. However, it's common to have similar properties between DTOs for creating and updating entities, which can lead to redundancy in your code.
import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsString, IsPositive, IsNotEmpty, IsOptional } from "class-validator";
import { ReportType } from "src/data";

// DTO for income request
export class CreateReportDTO{
    @IsNumber()
    @IsPositive()
    amount:number

    @IsString()
    @IsNotEmpty()
    source: string;
}

// DTO for income request
export class UpdateReportDTO{
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount: number

    @IsOptional()
    @IsString()
    source:string
}

// DTO for respose
export class ReportResponseDTO{
    id: string;
    source: string;
    amount: number;
    @Exclude()
    created_at: Date;
    @Exclude()
    updated_at: Date;
    
    type: ReportType;

    @Expose({name: "createdAt"})
    transformCreatedAt(){
        return this.created_at
    }

    constructor(partial: Partial<ReportResponseDTO>){
        Object.assign(this, partial)
    }
}