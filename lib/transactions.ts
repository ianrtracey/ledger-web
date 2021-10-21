export interface TransactionsResponse {
    data: Array<TransactionEntry>;
    size: number;
}

export interface TransactionEntry {
    date: string;
    transactions: Array<Transaction>;
}

export interface Transaction {
    date: string;
    amount: string;
    vendor: string;
}


export const amountToFloat = (amount: string) => parseFloat(amount.replace(/[^\d\.]/, ''))
export const sumTxns = (txns: Array<Transaction>) => txns.reduce((sum, txn) => sum + amountToFloat(txn.amount), 0)