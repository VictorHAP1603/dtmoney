import React, { useContext } from 'react'
import Modal from 'react-modal'
import { api } from '../../services/api';


import { Container, TransactionTypeContainer, RadioBox } from './styles'
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from '../../TransactionContext';


interface NewTransactionsModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}



const NewTransactionModal = ({onRequestClose, isOpen}:NewTransactionsModalProps ) => {
  const [title, setTitle] = React.useState('')
  const [amount, setAmount] = React.useState(0)
  const [category, setCategory] = React.useState('')
  const [type, setType] = React.useState('deposit')

  const { createTransaction } = useContext(TransactionsContext)

  async function handleCraateNewTransaction(event: React.FormEvent) {
    event.preventDefault();
  
   await createTransaction({
      title,
      type,
      amount,
      category,
    })

    onRequestClose();
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

  }

    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
          <Container onSubmit={handleCraateNewTransaction} >
            <h2>Cadastrar transação</h2>

            <input 
              type="text" 
              placeholder="Título" 
              value={title} 
              onChange={({target}) => setTitle(target.value)} 
            />

            <input 
              type="number" 
              placeholder="Valor"
              value={amount}
              onChange={({target}) => setAmount(Number(target.value))}
            />

            <TransactionTypeContainer>
              <RadioBox
                type="button"
                isActive={type === 'deposit'} 
                activeColor="green"
                onClick={() => setType('deposit')}
              >
                <img src={IncomeImg} alt="Entrada"/>
                <span>Entrada</span>
              </RadioBox>

              <RadioBox
                type="button"
                isActive={type === 'withdrawn'}
                activeColor="red"
                onClick={() => setType('withdrawn')}
                
              >
                <img src={OutcomeImg} alt="Saída"/>
                <span>Saída</span>
              </RadioBox>
            </TransactionTypeContainer>

            <input 
              type="text" 
              placeholder="Categoria"
              value={category}
              onChange={({target}) => setCategory(target.value) }
            />


            <button type="submit" >Cadastrar</button>
          </Container>
      </Modal>
    )
}

export default NewTransactionModal
