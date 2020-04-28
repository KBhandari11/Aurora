import React from "react";
import styled from "styled-components";
import title from "../../../assets/heatcards/title.png"

const Container = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  margin-bottom: 5%;
`;

const Text = styled.div`
    color: rgba(0,0,0,0.65);
    font-size: 80%;
    font-weight: 600;
    transform: rotate(-90deg);
    position: relative;
    height: 0px;
    bottom: 40px;
    right: 25%;

`;
const Placeholder = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    margin: auto

    
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