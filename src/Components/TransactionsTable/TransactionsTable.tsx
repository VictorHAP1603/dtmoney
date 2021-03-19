import React from 'react'
import { TransactionsContext } from '../../TransactionContext'
import { Container } from './styles'



const TransactionsTable = () => {
    const {transactions} = React.useContext(TransactionsContext)

    return (    
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} >
                            <td>{transaction.title}</td>
                            <td className={transaction.type} >
                                {transaction.type === 'withdrawn' ? '-' : ''}
                                {transaction.amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BT').format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

export default TransactionsTable
