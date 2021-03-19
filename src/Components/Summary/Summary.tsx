import React, { useContext } from 'react'
import { Container } from './styles'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionContext'

const Summary = () => {
    const { transactions } = useContext(TransactionsContext)

    console.log(transactions)

    const incomes = transactions
        .filter(transaction => transaction.type === 'deposit')
        .reduce((acm, transaction) => acm + transaction.amount , 0)

    const outcomes = transactions
        .filter(transaction => transaction.type === 'withdrawn')
        .reduce((acm, transaction) => acm + transaction.amount , 0)

    const total = incomes - outcomes
    // console.log(incomes)
    


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>{incomes.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas"/>
                </header>
                <strong>{outcomes.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong>
            </div>
        </Container>
    )
}

export default Summary