import propTypes from 'prop-types';
import {Wrapper, TransactionDate, Value, Comment} from './styles.js';


const Transaction = ({transaction}) =>{
    return(
        <Wrapper value={transaction.value}>
            <TransactionDate>{transaction.date}</TransactionDate>
            <Value>{transaction.value.toFixed(2)}</Value>
            <Comment>{transaction.comment}</Comment>
        </Wrapper>
    )
}

Transaction.propTypes = {
    transaction: propTypes.shape({
        label: propTypes.string,
        value: propTypes.number
    })
}

Transaction.defaultProps = {
    transaction:{
        comment: '',
        value: 0,
        date: ''
    }
}

export default Transaction;