import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FrontPage from './components/FrontPage/FrontPage';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={FrontPage} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
