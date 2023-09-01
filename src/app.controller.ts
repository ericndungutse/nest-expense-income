import { Controller, Delete, Get, Param, Post, Put, Body, HttpCode } from "@nestjs/common/decorators";
import { AppService } from "./app.service";
import { v4 as uuid } from "uuid";
import { data, ReportType } from "./data";


@Controller('/report/:type')
export class AppController{
  constructor(private readonly appService: AppService){}

  @Get('')
  getAllReports(@Param('type') type){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getAllReports(reportType)
  }

  @Post()
  createReport(@Body() body: {
    source: string,
    amount: number,
  }, @Param() type: ReportType){
    return this.appService.createReport(type, body)
  }

  @Get(':id')
  getReportById(
    @Param('type') type:string,
    @Param('id') id: string
  ){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getReportById(reportType, id)
  }

  @Put(":id")
  updateReport(@Param('type') type: string, @Param('id') id: string, @Body() body){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.updateReport(reportType, id, body) 
  }

  @Delete(':id')
  deleteReport(@Param('id') id:string ){
    return this.appService.deleteReport(id)
  }
}