import React,{ReactElement, Suspense, lazy} from "react";
import {Router,Route, Switch} from "react-router-dom";
import history from "../utils/history";
import {OrderFormContainer} from "../components/OrderForm";
import {ProductCardContainer} from "../components/productCard";

// const Home = lazy(()=> import("../views/home/App"));

const IndexRouter: React.FC =():ReactElement=>{
    return(
        <Router history={history}> 
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Route path="/" exact component={ProductCardContainer}/>
                    <Route path="/orderForm" exact component={OrderFormContainer}/>
                </Switch>
            </Suspense>
        </Router>
    )
};
export default IndexRouter;