import React from "react";
import styled from "styled-components";

const    Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    padding: 8px 0px;
    border-radius: 4px;
    
`;

const Text = styled.div`
    color: #000000;
    font-size: 80%;
    line-height: 80%;
    padding: 3px;
`;
class Title extends React.Component {
    render(props) {
      return (
        <Container>
            <Text>{this.props.name}</Text>
            <Text>{this.props.amount}</Text>
            <Text>{this.props.date}</Text>
        </Container>
      );
    }
  }


export default Title;