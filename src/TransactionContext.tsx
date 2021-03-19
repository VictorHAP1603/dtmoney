import React, { createContext } from 'react'
import { api } from './services/api'

interface TransactionProps  {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
  }

interface TransactionProviderProps {
    children: React.ReactNode
}

type TransactionsInput = Omit<TransactionProps, 'id' | 'createdAt'>

interface TransactionsContextData {
    transactions: TransactionProps[],
    createTransaction: (transaction: TransactionsInput) => Promise<void>,
}

export const TransactionsContext  = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)




export const TransactionsProvider = (props: TransactionProviderProps) => {
    const [transactions, setTransactions] = React.useState<TransactionProps[]>([])

    React.useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionsInput) {
       const response = await api.post('/transactions', {
           ...transactionInput,
           createdAt: new Date(),
       });

       const { transaction } = response.data
       setTransactions([...transactions, transaction,])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {props.children}
        </TransactionsContext.Provider>
    )
}