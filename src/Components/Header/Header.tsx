import React from 'react'

import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

const Header = ({ onOpenNewTransactionModal }: HeaderProps ) => {
   

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Dev Finances"/>
                <button type="button" onClick={onOpenNewTransactionModal} >Nova Transação</button>
            </Content>
        </Container>
    )
}

export default Header
