import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchUser } from '../actions/index';
import { connect } from 'react-redux';

import Header from "./Header";
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

// const App = () => {
//     const [user, setUser] = useState({});

//     return (
//         <div className="container">
//             <BrowserRouter>
//                 <div>
//                 <Route path="/" component={Header} />
//                 <Switch>
//                     <Route path="/surveys/new" component={SurveyNew} />
//                     <Route path="/surveys" component={Dashboard} />
//                     <Route path="/" component={Landing} />
//                 </Switch>
//                 </div>
//             </BrowserRouter>
//         </div>
//     )
// }

class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <Switch>
              <Route path="/surveys/new" component={SurveyNew} />
              <Route path="/surveys" component={Dashboard} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth
    }
}

export default connect(mapStateToProps, { fetchUser })(App);
