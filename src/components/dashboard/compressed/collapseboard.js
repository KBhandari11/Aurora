import React from "react";
import styled from "styled-components";
import Carousel, { consts } from 'react-elastic-carousel';
import MiniDetail from './miniDetail';
import Detail from '../large/dashDetail';

import vmap1 from '../../../assets/verticards/heatmap_1.png';


import heatmap1 from '../../../assets/heatcards/heatmap_1.svg';
import heatmap2 from '../../../assets/heatcards/heatmap_2.svg';
import heatmap3 from '../../../assets/heatcards/heatmap_3.svg';
import heatmap4 from '../../../assets/heatcards/heatmap_4.svg';
import heatmap5 from '../../../assets/heatcards/heatmap_5.svg';

const   Button = styled.button`
  width: 20px;
  height; 20px;
  transition: all 0.3s ease;
  background-color: rgba(169,169,169, 0.6);
  font-size: 12px;
  color: #444;
  box-shadow: 0 0 2px 0px #333;
  border-radius: 100%;
  border: none;
  padding: 0px;
  align-self: center;
  cursor: pointer;
  outline: none;
  margin: 5px;
  &:hover {
    color: #fff;
    background-color: rgba(175,175,175, 1);
    box-shadow: 0 0 2px 0px #333;
  }
  
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: props.Toggle,
      map: vmap1,
      name: "ABC Funds L.P.",
      amount: "$148,329,201" ,
      date: "4 Feb 2020"

    }
    
    this.breakPoints = [
        { width: 1, itemsToShow: 3, itemsToScroll: 3 },
        { width: 425, itemsToShow: 8, itemsToScroll: 8 },
        { width: 1000, itemsToShow: 18, itemsToScroll: 18 }
      ]
  }
  
  //Design for arrow in the Carousel
  myArrow({ type, onClick }) {
    const pointer = type === consts.PREV ? "❮" : "❯"
    return <Button onClick={onClick}>{pointer}</Button>
  }
  createData = () => {
      let children = []
      let map =[heatmap1,heatmap2,heatmap3,heatmap4,heatmap5]
      let name_list=["ABC","DEF","GHI","JKL","MNO"]
      //Inner loop to create children s
      for (let j = 0; j < 54; j++) {
        let x = [Math.floor(((Math.random() * 10))/2)]
        children.push(<MiniDetail key={j} data={x} image={map[x]} name={name_list[x]} /> )
      }
    return children
  }
  
  render() {
    const Container = styled.div`
      padding: 10px;
      background: rgb(211,211,211);
    `;

    const Content = styled.div`
      display: flex;
      flex-direction: row;
      position: relative;
      bottom: 5vh;
      @media (max-width: 1000px){
        position: static;
      }
    
    `;
  

    return (
        <Container> 
          <Content>
          <Detail image={this.state.map} name={this.state.name} amount={this.state.amount } date={this.state.date} />
            <Carousel breakPoints={this.breakPoints} renderArrow={this.myArrow} style={{margin:0}} pagination={false}     
              focusOnSelect={true}
            >
              {this.createData()}           
            </Carousel>
          </Content>
        </Container>
    );
  }
}

export default Dashboard;
