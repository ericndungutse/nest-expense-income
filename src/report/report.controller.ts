import { Controller, Delete, Get, Param, Post, Put, Body } from "@nestjs/common/decorators";
import { ParseEnumPipe, ParseUUIDPipe } from "@nestjs/common/pipes";
import { ReportService } from "./report.service";
import {  ReportType } from "../data";
import { CreateReportDTO, ReportResponseDTO, UpdateReportDTO } from "../dto/report.dto";


@Controller('/report/:type')
export class ReportController{
  constructor(private readonly reportService: ReportService){}

  @Get('')
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type): ReportResponseDTO[]{
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.getAllReports(reportType)
  }

  @Post()
  createReport(@Body() body: CreateReportDTO, @Param('type') type: ReportType): ReportResponseDTO{
    return this.reportService.createReport(type, body)
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type:string,
    @Param('id', ParseUUIDPipe) id: string
  ): ReportResponseDTO{
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.getReportById(reportType, id)
  }

  @Put(":id")
  updateReport(@Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateReportDTO): ReportResponseDTO{
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.updateReport(reportType, id, body) 
  }

  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id:string ){
    return this.reportService.deleteReport(id)
  }
}