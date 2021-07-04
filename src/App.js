// import {Navbar} from "./components";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyles from "./globalStyles";
import {Footer, Navbar} from "./components";
import Home from "./pages/Home/Home";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Navbar />
            <Switch>
                <Route path={'/'} component={Home} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
