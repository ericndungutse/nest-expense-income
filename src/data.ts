export enum ReportType{
    INCOME= "income",
    EXPENSE= "expense"
}
export const data: Data = {
    report:[
        {
            id: "64f10406f132c3d344bb2d47",
            source: "udemy",
            amount: 2221.4172,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME,
          },
          {
            id: "64f104068c4daa0cec8a30aa",
            source: "salary",
            amount: 3607.7092,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: "64f104060d076d48ed616a2c",
            source: "salary",
            amount: 3309.4997,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f10406af1a15fac82cf14c",
            source: "udemy",
            amount: 3178.6535,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: "64f10406a3e5358617775245",
            source: "youtube",
            amount: 1651.3965,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f10406f17035a96e455070",
            source: "udemy",
            amount: 1027.3127,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f10406595c50013a77c3e1",
            source: "youtube",
            amount: 1918.6282,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f104068a0d1efc88efe82b",
            source: "youtube",
            amount: 3769.9939,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: "64f104066934d4e2a1131d22",
            source: "youtube",
            amount: 4676.208,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f10406cd8174f50872eb9f",
            source: "youtube",
            amount: 4092.7949,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f104064eade3b141993d0c",
            source: "youtube",
            amount: 2773.919,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f10406898ebf3c704a12aa",
            source: "salary",
            amount: 2409.6234,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f104067d4bf53ce54ddb71",
            source: "youtube",
            amount: 2641.7071,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: "64f1040654c100168fbe7000",
            source: "salary",
            amount: 1564.8128,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f104061e660a4a501f56bf",
            source: "udemy",
            amount: 1274.1109,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: "64f1040699f1814ee17ee58c",
            source: "udemy",
            amount: 4310.0023,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f1040614c44fefc2881819",
            source: "salary",
            amount: 4804.5331,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f104066bbfcb9e5b15a8f7",
            source: "udemy",
            amount: 3468.1693,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
          },
          {
            id: "64f10406c0b4c5f3b00fd161",
            source: "salary",
            amount: 3739.5592,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
          },
          {
            id: "64f10406218d4beaa1734681",
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




