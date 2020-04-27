import React from "react";
import styled from "styled-components";
import title from "../../../assets/heatcards/title.png"

const Container = styled.div`
height: 65px;
margin: auto;

`;

const Text = styled.div`
    color: rgba(0,0,0,0.65);
    font-size: 80%;
    font-weight: 600;
    transform: rotate(-90deg);
    position: relative;
    bottom: 50px;

`;
const Placeholder = styled.img`
    width: 40px;
    height: 62px;
    
`;
class MiniTitle extends React.Component {
    render(props) {
      return (
        <Container>
            <Placeholder src={title}/>
            <Text>{this.props.name}</Text>
        </Container>
      );
    }
  }


export default MiniTitle;