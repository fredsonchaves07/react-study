import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionsContext';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionContext)
    const {control, register, handleSubmit, formState: {isSubmitting}, reset} = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description, price, category, type } = data

        await createTransaction({
            description, price, category, type
        })
       
        reset()
    }

    return (
        <Dialog.Portal>
                        <Overlay />
                        <Content>
                            <Dialog.Title>Nova transação</Dialog.Title>

                            <CloseButton>
                                <X size={24}/>
                            </CloseButton>

                            <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                                <input {...register('description')} type="text" name="" id="" placeholder="Descrição" required/>
                                <input {...register('price', {valueAsNumber: true})} type="number" name="" id="" placeholder="Preço" required/>
                                <input {...register('category')} type="text" name="" id="" placeholder="Categoria" required/>

                                <Controller 
                                    control={control}
                                    name='type'
                                    render={({ field }) => {
                                        return (
                                        <TransactionType onValueChange={field.onChange}  value={field.value}>
                                        <TransactionTypeButton {...register('type')} variant='income' value='income'>
                                            <ArrowCircleUp size={24} />
                                            Entrada
                                        </TransactionTypeButton>

                                        <TransactionTypeButton {...register('type')} variant='outcome' value='outcome'>
                                            <ArrowCircleDown size={24} />
                                            Saida
                                        </TransactionTypeButton>
                                    </TransactionType>
                                        )
                                    }}
                                />
                                
                                <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                            </form>
                        </Content>
                    </Dialog.Portal>
    )
}