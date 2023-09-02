import { Injectable } from '@nestjs/common';
import { ReportService } from 'src/report/report.service';
import { ReportType } from 'src/data';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  calculateSumary() {
    const totalExpenses = this.reportService
      .getAllReports(ReportType.EXPENSE)
      .reduce((total, report) => total + report.amount, 0);

    const totalIncome = this.reportService
      .getAllReports(ReportType.INCOME)
      .reduce((total, report) => total + report.amount, 0);

    return {
      totalExpenses,
      totalIncome,
      netIncome: totalIncome - totalExpenses,
    };
  }
}
