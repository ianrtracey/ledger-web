import { TransactionsResponse, TransactionEntry, sumTxns } from "./transactions"
import sampleTransactions from '../fixtures/transactions.json'

const MONTHLY_BUDGET = 4000
export const WEEKLY_BUDGET = MONTHLY_BUDGET / 4
export const DAILY_BUDGET = MONTHLY_BUDGET / 28



export const computeRollingBudget = (transactions: Array<TransactionEntry>) => {
    const txnsWithDailyBudget = transactions.map((t: TransactionEntry) => ({
        ...t,
        dailyBudget: DAILY_BUDGET - sumTxns(t.transactions),
        sum: sumTxns(t.transactions)
    }))

    return {
        weeklyBudget: WEEKLY_BUDGET - txnsWithDailyBudget.reduce((sum: number, txn: any) => sum + txn.sum, 0),
        transactionsByDate: txnsWithDailyBudget
    }
}

export { }