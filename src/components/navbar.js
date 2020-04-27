import React from "react";
import styled from "styled-components";
import nav from "../assets/nav.png"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Image = styled.img`
    width: 100%;
    height: auto;

`;
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "/Aurora/collapse/"

    }
    this.Toggle = this.Toggle.bind(this)
    
  }
  
  Toggle(e){
    if(this.state.link === "/Aurora/"){
      this.setState((state) => {
        return {link: "/Aurora/collapse/" };
      });
    }
    else{
      this.setState((state) => {
        return {link: "/Aurora/" };
      });
    }
  }
    render(props) {
      return (
        <>
         <Link to={this.state.link}><Image src={nav} usemap="#map" onClick={this.Toggle}/></Link> 
        </>
      );
    }
  }


export default Nav;