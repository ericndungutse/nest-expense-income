import { Injectable } from '@nestjs/common';
import { ReportService } from 'src/report/report.service';
import { ReportType } from 'src/data';

@Injectable()
export class SummaryService {
    constructor(private readonly reportService: ReportService){}
    calculateSumary(){
        const expenses = this.reportService.getAllReports(ReportType.EXPENSE)
        console.log(expenses)
        return "summary"
    }
}
