import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import LogIn from "../pages/auth/LogIn";
import ListTodo from './../pages/ListTodo';

const App = () =>{
    return(
        <Router>
            <Header/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/list"} component={ListTodo}/>
                <Route exact path={"/login"} component={LogIn}/>
                <Route path={"*"} component={NotFoundPage}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App;