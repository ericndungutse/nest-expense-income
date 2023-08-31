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
  getReportById(){
    return {
      status: "Report"
    }
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