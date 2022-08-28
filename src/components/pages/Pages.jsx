import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Header} from "../common/Header";
import Home from "../home/Home";
import { About } from "../pages/About";
import  Services  from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Testimonials  from "../pages/Testimonials";

const Pages = () => {
  return (
    <>
    <Router>
    <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/testimonials' component={Testimonials} />
          
        </Switch>
      
      </Router>

    </>
    
  );
}

export default Pages