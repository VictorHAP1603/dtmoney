import React from 'react'
import { Container } from './styles'

const TransactionsTable = () => {
    
    React.useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(res => res.json())
            .then(json => console.log(json))
    }, [])

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
                    <tr>
                        <td>Desenvolvimento WebSite</td>
                        <td className="deposit" >R$12.0000</td>
                        <td>Desenvolvimento</td>
                        <td>16/03/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdrawn" >- R$1.000</td>
                        <td>Casa</td>
                        <td>16/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}

export default TransactionsTable
