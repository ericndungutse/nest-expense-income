import { Injectable } from "@nestjs/common/decorators";
import { v4 as uuid } from "uuid";
import { ReportType, data } from "./data";

interface Report  {
  source: string,
  amount: number,
}
@Injectable()
export class AppService{
  getAllReports(type: ReportType){
    return  data.report.filter(report=> report.type === type)
  }

  getReportById(type: ReportType, id: string){
    const report = data.report.find(report => report.type === type && report.id=== id)

    if(!report) return {status: 404, message: "report not found"}

    return report
  }

  createReport(type: ReportType, {amount, source}:Report){
    const newReport = {
      id: uuid(),
      source: source,
      amount: amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    }
    data.report.push(newReport)

    return newReport

  }

  updateReport(type: ReportType, id: string, body:Report){
    const report = data.report.find(report => report.type === type && report.id === id)
  
    if(!report) return {status: 404, message: "report not found"}

    const newReport = {
      ...report,
      updated_at: new Date(),
      ...body
    }

    data.report.splice(data.report.findIndex(rep => rep.id === report.id), 1, newReport)

    return newReport
  }

  deleteReport(id: string){
    const report = data.report.find(report => report.id=== id)
    if(!report) return {status: 404, message: "report not found"}

    data.report.splice(data.report.findIndex(rep => rep.id === report.id), 1)

    return 
  }
}