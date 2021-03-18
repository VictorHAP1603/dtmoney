import React from 'react'
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';


interface NewTransactionsModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

const NewTransactionModal = ({onRequestClose, isOpen}:NewTransactionsModalProps ) => {

  const [type, setType] = React.useState('deposit')

    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
          <Container>
            <h2>Cadastrar transação</h2>

            <input type="text" placeholder="Título"/>
            <input type="number" placeholder="Valor"/>

            <TransactionTypeContainer>
              <RadioBox
                type="button"
                isActive={type === 'deposit'}
                onClick={() => setType('deposit')}
              >
                <img src={IncomeImg} alt="Entrada"/>
                <span>Entrada</span>
              </RadioBox>

              <RadioBox
                type="button"
                isActive={type === 'withdrawn'}
                onClick={() => setType('withdrawn')}
                
              >
                <img src={OutcomeImg} alt="Saída"/>
                <span>Saída</span>
              </RadioBox>
            </TransactionTypeContainer>

            <input type="text" placeholder="Categoria"/>
            <button type="submit" >Cadastrar</button>
          </Container>
      </Modal>
    )
}

export default NewTransactionModal
