import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";

@Controller('/report/:type')
export class AppController{
  @Get('')
  getAllReports(@Param('type') type){
    console.log(type )
    return [{
      title:"Shaving"
    }]
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