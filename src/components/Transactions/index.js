import Transaction from "../Transaction"
import propTypes from 'prop-types';

const Transactions = ({transactions = []}) => 
                transactions.map((transaction) =>
                    <Transaction transaction={transaction} key={transaction.id}/>)
            

Transactions.propType = {
    transactions: propTypes.array
}


export default Transactions;