import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
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
  createReport(){
    return "Created"
  }

  @Get(':id')
  getReportById(
    @Param('type') type:string,
    @Param('id') id: string
  ){
    console.log({id, type})
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    const report = data.report.find(report => report.type === reportType && report.id=== id)

    if(!report) return {status: 404, message: "report not found"}

    return report
  }

  @Put(":id")
  updateReport(){
    return "Updated"
  }

  @Delete(':id')
  deleteReport(){
    return "Deleted"
  }
}