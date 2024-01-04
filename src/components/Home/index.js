import { Component } from 'react';
import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';
import { Wrapper } from './styles';
import ErrorBoundary from '../ErrorBoundary';
import { getItems, addItem } from '../../utils/indexdb';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            balance: 0,
            transactions: []
        }
        console.log('constructor');
    }

    componentDidMount(){
        getItems().then((transactions) => {
            this.setState({
                transactions
            })
        }).catch((e) => {
            debugger
        })
    }

    onChange = ({value, date, comment}) => {
        const transaction = {
            value: +value, 
            comment,
            date,
            id: Date.now()
        }

        this.setState((state) => ({
            balance: state.balance + Number(value),
            transactions: [transaction, 
            ...state.transactions]
        }));

        addItem(transaction);
    }



    render(){
        console.log('render')
        return (
            <ErrorBoundary>
                <Wrapper>
                    <Balance balance={this.state.balance}/>
                    <Form onChange={this.onChange}/>
                    <hr/>
                    <Transactions transactions={this.state.transactions}/>
                </Wrapper>
            </ErrorBoundary>
          )
    }
  }

  export default Home; 