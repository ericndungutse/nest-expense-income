import { Controller, Delete, Get, Param, Post, Put, Body } from "@nestjs/common/decorators";
import { ParseEnumPipe, ParseUUIDPipe } from "@nestjs/common/pipes";
import { AppService } from "./app.service";
import {  ReportType } from "./data";
import { CreateReportDTO, UpdateReportDTO } from "./dto/report.dto";


@Controller('/report/:type')
export class AppController{
  constructor(private readonly appService: AppService){}

  @Get('')
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getAllReports(reportType)
  }

  @Post()
  createReport(@Body() body: CreateReportDTO, @Param('type') type: ReportType){
    return this.appService.createReport(type, body)
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type:string,
    @Param('id', ParseUUIDPipe) id: string
  ){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getReportById(reportType, id)
  }

  @Put(":id")
  updateReport(@Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateReportDTO){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.updateReport(reportType, id, body) 
  }

  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id:string ){
    return this.appService.deleteReport(id)
  }
}