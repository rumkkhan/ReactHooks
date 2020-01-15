import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {default as Portfolio, PortfolioItems } from './components/Portfolio'
import * as serviceWorker from './serviceWorker';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/footer';
import Login from './components/LoginComponent/Login'
import Registration from './components/LoginComponent/Registration'
import GetAPI from './components/API/GetApi';
import MainPage from './components/Curd_Hook/MainPage'
import FirstPage from './components/Curd_Hook/FirstPage';
import Progressbar from './components/API/Progressbar';
import CurdIndex from './components/Curd_Hook/CurdIndex';
 export const UserContext  = React.createContext();
const username = "Rameez khan";

var portfolioModel = [
    {img:'cake'},
    {img: 'circus'},
    {img:'game'},
    {img:'safe'},
    {img:'submarine'}
  ]
  let footerModel = [
    {title:"Location", content:"2215 John Daniel Drive <br/> Clark, MO 65243"},
    {title:"Around the Web", content:[
                    {url:"#",key:"facebook"},
                    {url:"#",key:"twitter"},
                    {url:"#",key:"instagram"},
                    {url:"#",key:"LinkedIn"}]},
    {title:"About Freelancer", content:"Freelance is a free to use,<br/> MIT licensed Bootstrap theme created byStart Bootstrap."}
]
//<App/>
//<Login/><Registration/><GetAPI/>
ReactDOM.render(
//  <UserContext.Provider value={username}>
//   {/* // <MainPage  /> */}
//   {/* <GetAPI/> */}
//   <Progressbar />
//  </UserContext.Provider>
//<FirstPage  />
<CurdIndex/>
, document.getElementById('page-top'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
{/* <Header/><Portfolio data={portfolioModel}/>
<About/><Contact/> */}
{/* <div><Footer data={footerModel}/></div> */}