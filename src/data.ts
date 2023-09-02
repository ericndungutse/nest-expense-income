import { v4 as uuid } from "uuid"
export enum ReportType{
    INCOME= "income",
    EXPENSE= "expense"
}
export const data: Data = {
    report:[
        {
            id: uuid(),
            source: "udemy",
            amount: 2221.4172,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME,
          },
          {
            id: uuid(),
            source: "salary",
            amount: 3607.7092,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: uuid(),
            source: "salary",
            amount: 3309.4997,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "udemy",
            amount: 3178.6535,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: uuid(),
            source: "youtube",
            amount: 1651.3965,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "udemy",
            amount: 1027.3127,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "youtube",
            amount: 1918.6282,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "youtube",
            amount: 3769.9939,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: uuid(),
            source: "youtube",
            amount: 4676.208,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "youtube",
            amount: 4092.7949,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "youtube",
            amount: 2773.919,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "salary",
            amount: 2409.6234,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "youtube",
            amount: 2641.7071,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: uuid(),
            source: "salary",
            amount: 1564.8128,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "udemy",
            amount: 1274.1109,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: uuid(),
            source: "udemy",
            amount: 4310.0023,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "salary",
            amount: 4804.5331,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "udemy",
            amount: 3468.1693,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: uuid(),
            source: "salary",
            amount: 3739.5592,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: uuid(),
            source: "salary",
            amount: 3443.6746,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          }
    ]
}
interface Data {
    report: {
        id: string,
        source: string,
        amount: number,
        created_at: Date,
        updated_at:Date,
        type: ReportType
    }[]
}




