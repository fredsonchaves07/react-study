import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
                        <Overlay />
                        <Content>
                            <Dialog.Title>Nova transação</Dialog.Title>

                            <CloseButton>
                                <X size={24}/>
                            </CloseButton>

                            <form action="">
                                <input type="text" name="" id="" placeholder="Descrição" required/>
                                <input type="number" name="" id="" placeholder="Preço" required/>
                                <input type="text" name="" id="" placeholder="Categoria" required/>

                                <TransactionType>
                                    <TransactionTypeButton variant='income'>
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton variant='outcome'>
                                        <ArrowCircleDown size={24} />
                                        Saida
                                    </TransactionTypeButton>
                                </TransactionType>
                                
                                <button type="submit">Cadastrar</button>
                            </form>
                        </Content>
                    </Dialog.Portal>
    )
}