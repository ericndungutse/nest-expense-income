import { Injectable } from "@nestjs/common/decorators";
import { v4 as uuid } from "uuid";
import { ReportType, data } from "./data";
import { ReportResponseDTO } from "./dto/report.dto";

interface Report  {
  source: string,
  amount: number,
}
interface UpdateReport  {
  source?: string,
  amount?: number,
}
@Injectable()
export class AppService{
  getAllReports(type: ReportType): ReportResponseDTO[] {
    return  data.report.filter(report=> report.type === type).map(report => new ReportResponseDTO(report))
  }

  getReportById(type: ReportType, id: string): ReportResponseDTO{
    const report = data.report.find(report => report.type === type && report.id=== id)
    if(!report) return
    return new ReportResponseDTO(report)
  }

  createReport(type: ReportType, {amount, source}:Report): ReportResponseDTO{

    const newReport = {
      id: uuid(),
      source: source,
      amount: amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    }
    data.report.push(newReport)

    return new ReportResponseDTO(newReport)

  }

  updateReport(type: ReportType, id: string, body: UpdateReport): ReportResponseDTO{
    const report = data.report.find(report => report.type === type && report.id === id)

    const newReport = {
      ...report,
      updated_at: new Date(),
      ...body
    }

    data.report.splice(data.report.findIndex(rep => rep.id === report.id), 1, newReport)

    return new ReportResponseDTO(newReport)
  }

  deleteReport(id: string){
    const report = data.report.find(report => report.id=== id)
    if(!report) return {status: 404, message: "report not found"}

    data.report.splice(data.report.findIndex(rep => rep.id === report.id), 1)

    return 
  }
}