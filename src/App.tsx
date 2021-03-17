import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs'
import Modal from 'react-modal'
import NewTransactionModal from './Components/NewTransactionModal/NewTransactionModal';

Modal.setAppElement('#root')

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Fodd',
          createdAt: new Date()
        }
      ]
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
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal onRequestClose={handleCloseOpenNewTransactionModal} isOpen={isNewTransactionModalOPen} />
    </>
  );
}

