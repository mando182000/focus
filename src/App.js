// import logo from './logo.svg';
import './App.css';

import Nave from './components/layout/Nave';

import Slider from './components/layout/Slider';
import Cursol from './components/layout/Cursol';

import Header from './components/layout/Header';
import Home from './components/home/HOME';
import Information from './components/layout/Information';
import Links from './components/layout/Links';
import { Component } from 'react';
export default class App extends Component{
  render(){
    return(
    <>
    <Nave />
    <Slider />
    <Cursol  />
    <Header />
    

    <Home />
    <Information />
<Links />

    </>
  )
}
}
