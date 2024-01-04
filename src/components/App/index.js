import { BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import { GlobalStyle, Wrapper } from './styles';
import Home from '../Home';
import Statistics from '../Statistics';
import About from '../About';
import { Component } from 'react';
import { open } from '../../utils/indexdb';
import Header from '../Header';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    };


    componentDidMount(){
        open().then(() => {
            this.setState({
                loading: false
            })
        }).catch(() => {
            console.error('Error')
        });
    }

    render(){
        if(this.state.loading){
            return <div>Loading...</div>
        };
        
        return (
            <Router>
                 <Wrapper>
                    <GlobalStyle/>
                    <Header/>
                    <Routes>
                        <Route path='/about' element={<About/>} />
                        <Route path='/statistics' element={<Statistics/>} />
                        <Route path='/' element={<Home/>} />
                    </Routes>
                </Wrapper>
            </Router>
           
        )
    }
}

export default App; 