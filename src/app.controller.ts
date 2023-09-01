import { Controller, Delete, Get, Param, Post, Put, Body } from "@nestjs/common/decorators";
import { v4 as uuid } from "uuid";
import { data, ReportType } from "./data";


@Controller('/report/:type')
export class AppController{
  @Get('')
  getAllReports(@Param('type') type){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    const report = data.report.filter(report=> report.type === reportType)
    return {
      data: {
        count: report.length,
        report: report
      }
    }
  }

  @Post()
  createReport(@Body() body: {
    source: string,
    amount: number,
  }, @Param() type: string){
    
    const newReport = {
      id: uuid(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    }
    data.report.push(newReport)
    return newReport
  }

  @Get(':id')
  getReportById(
    @Param('type') type:string,
    @Param('id') id: string
  ){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    const report = data.report.find(report => report.type === reportType && report.id=== id)

    if(!report) return {status: 404, message: "report not found"}

    return report
  }

  @Put(":id")
  updateReport(@Param('type') type: string, @Param('id') id: string, @Body() body){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    const report = data.report.find(report => report.type === reportType && report.id === id)
  
    if(!report) return {status: 404, message: "report not found"}

    const newReport = {
      ...report,
      updated_at: new Date(),
      ...body
    }

    data.report.splice(data.report.findIndex(rep => rep.id === report.id), 1, newReport)

    return newReport
  }

  @Delete(':id')
  deleteReport(@Param('type') type: string, @Param('id') id:string ){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    const report = data.report.find(report => report.type === reportType && report.id=== id)
    console.log(report)
    if(!report) return {status: 404, message: "report not found"}

    data.report.splice(data.report.findIndex(rep => rep.id === report.id), 1)
    return data.report
  }
}