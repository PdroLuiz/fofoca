import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MyHeader from "../../components/MyHeader";
import FofocaReader from "../../components/FofocaReader";
import FormAddFofoca from "../../components/FormAddFofoca";
import FormDeleteFofoca from "../../components/FormDeleteFofoca";


const Home : React.FC = () => {
    return (<div>
            <BrowserRouter>
                <MyHeader/>
                <FofocaReader/>
                <Route>
                </Route>
                <Route path="/create">
                    <FormAddFofoca/>
                </Route>
                <Route path="/delete">
                    <FormDeleteFofoca/>
                </Route>
            </BrowserRouter>
        
        </div>);
}

export default Home;