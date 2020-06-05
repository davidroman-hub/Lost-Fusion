import React,{Fragment} from 'react';
import {Link, Router, withRouter} from 'react-router-dom'
import '../styles/home.scss';
import Logo from '../../src/images/Logo.png'

const NavBar = ({children,match,history,router}) => {

    
const isActive = path => {
    if(match.path === path) {
        return {color:'#EE46B8'}
    } else{
        return {color:'#EE46B8'}
    }
};

    const nav = () => (
        
     <h1>h</h1>

    )
    

    return (
        <Fragment>
            {nav()}
            <div className="container">
                {children}
            </div>
        </Fragment>
    )
}

export default withRouter(NavBar)