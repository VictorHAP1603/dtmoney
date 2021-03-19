import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs'
import Modal from 'react-modal'
import NewTransactionModal from './Components/NewTransactionModal/NewTransactionModal';
import { TransactionsProvider } from './TransactionContext';

Modal.setAppElement('#root')

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freenlance WebSite',
            type: 'deposit',
            category: 'Dev',
            amount: 6000,
            createdAt: new Date('2021-02-12 09:00:00'),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdrawn',
            category: 'Casa',
            amount: 1100,
            createdAt: new Date('2021-02-12 12:00:00'),
          },
          {
            id: 3,
            title: 'Curso',
            type: 'withdrawn',
            category: 'Estudo',
            amount: 400,
            createdAt: new Date('2021-02-12 12:00:00'),
          },
          {
            id: 4,
            title: 'Venda PC',
            type: 'deposit',
            category: 'Vendas',
            amount: 3500,
            createdAt: new Date('2021-02-12 12:00:00'),
          },
         
        ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', data)
    })

  }
})

export function App() {
  const [isNewTransactionModalOPen, setIsNewTransactionModalOpen] = React.useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal onRequestClose={handleCloseOpenNewTransactionModal} isOpen={isNewTransactionModalOPen} />
    </TransactionsProvider>
  );
}

