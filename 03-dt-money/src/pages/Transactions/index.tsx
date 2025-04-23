import { useContext} from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionContainer, TransactionTable } from "./styles";
import { TransactionContext } from "../../context/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";


export function Transactions() {
    const { transactions } = useContext(TransactionContext )

    return (
        <div>
            <Header />
            <Summary />
            <TransactionContainer>
            <SearchForm />
                <TransactionTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHighLight variant={transaction.type}>
                                    {transaction.type === 'outcome' && '- '}
                                    {priceFormatter.format(transaction.price)}
                                    </PriceHighLight></td>
                                <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>
    )
}