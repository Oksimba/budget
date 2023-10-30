import propTypes from 'prop-types';
import {Wrapper} from './styles.js';


const Transaction = ({transaction}) =>{
    return(
        <Wrapper value={transaction.value}>
            Label: {transaction.label}
            <p>Value: {transaction.value}</p>
            <br/>
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
        label: '',
        value: 0
    }
}

export default Transaction;