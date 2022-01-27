export interface IGoldfarbInvoiceLine {
    currency: string;
    description: string;
    discount: number;
    itemcode: string;
    price: number;
    quantity: number;
    total: number;
}

export interface IGoldfarbInvoice {
    address1: string;
    address2: string;
    cardCode: string;
    cardName: string;
    currency: string;
    discountPorcentage: number;
    discountTotal: number;
    docDate: string;
    folioNum: string;
    folioPref: string;
    iva: number;
    preTotal: number;
    total: number;
    lines: IGoldfarbInvoiceLine[];
}

export interface IGoldfarbReceipt {
    name: string;
    recipe: {
        docNum: number;
        docDate: string;
        docCurr: string;
        docRate: number;
        cardName: string;
        total: number;
        cardCode: string;
        cardName1: string;
    }[];
    checks: {
        checkNum: number;
        bankName: string;
        dueDate: string;
        currency: string;
        checkSum: number;
    }[];
    invoices: {
        docNum: number;
        folioNum: string;
        docDate: string;
        docCur: string;
        total: number;
    }[];
    noApply: number;
}
