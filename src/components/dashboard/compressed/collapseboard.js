import React from "react";
import styled from "styled-components";
import Carousel, { consts } from 'react-elastic-carousel';
import MiniDetail from './miniDetail';
import Detail from '../large/dashDetail';

import vmap1 from '../../../assets/verticards/heatmap_1.png';
import vmap2 from '../../../assets/verticards/heatmap_2.png';
import vmap3 from '../../../assets/verticards/heatmap_3.png';
import vmap4 from '../../../assets/verticards/heatmap_4.png';
import vmap5 from '../../../assets/verticards/heatmap_5.png';



import heatmap1 from '../../../assets/heatcards/heatmap_1.svg';
import heatmap2 from '../../../assets/heatcards/heatmap_2.svg';
import heatmap3 from '../../../assets/heatcards/heatmap_3.svg';
import heatmap4 from '../../../assets/heatcards/heatmap_4.svg';
import heatmap5 from '../../../assets/heatcards/heatmap_5.svg';

const   RightButton = styled.button`
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
  position: absolute;
  left: calc(100vw - 5%);
  bottom: calc(50vh - 50px);



`;
const   LeftButton = styled.button`
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
  position: absolute;
  left: 1%;
  bottom: calc(50vh - 50px);
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
    this.Display = this.Display.bind(this);
    
    this.breakPoints = [
        { width: 1, itemsToShow: 3, itemsToScroll: 3 },
        { width: 425, itemsToShow: 5, itemsToScroll: 5 },
        { width: 768, itemsToShow: 8, itemsToScroll: 8 },
        { width: 850, itemsToShow: 16, itemsToScroll: 16 }

      ]
  }
  componentDidMount() {
    var x = this.createData()

    
  }
  Display(a){
    let map =[vmap1,vmap2,vmap3,vmap4,vmap5]
    let name = ["ABC Funds L.P.","DEF Funds L.P.","GHI Funds L.P.","JKL Funds L.P.","MNO Funds L.P."]
    this.setState((state) => {
      return {
        map: map[a],
        name: name[a],
      };
    });
    
  }
  //Design for arrow in the Carousel❮
  myArrow({ type, onClick }) {
    const pointerR = type === consts.NEXT ? "❯" : null;
    const pointerL = type === consts.PREV ? "❮" : null;
    const x = <div><RightButton onClick={onClick}>{pointerR}</RightButton> <LeftButton onClick={onClick}>{pointerL}</LeftButton></div>
    return x
  }
  createData = () => {
      let children = []
      let map =[heatmap1,heatmap2,heatmap3,heatmap4,heatmap5]
      let name_list=["ABC","DEF","GHI","JKL","MNO"]
      //Inner loop to create children s
      for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 5; k++) {
        children.push(
          {id: j,value: k, title: <MiniDetail key={j+k} image={map[k]} name={name_list[k]} />}
         )
        }
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
    const Blank = styled.div`
      width: 5vw;
      border: none;

      @media (max-width: 768px){
        display:none;
      }
    
    `;
      

    return (
        <Container> 
          <Content>
            <Blank />
            <Detail image={this.state.map} name={this.state.name} amount={this.state.amount } date={this.state.date} />
            <Carousel breakPoints={this.breakPoints} renderArrow={this.myArrow} style={{margin:0}} pagination={false} >
             {this.createData().map(item => <div key={item.id} onClick={() => this.Display(item.value)} >{item.title}</div>)}           
            </Carousel>
            <Blank />

          </Content>
        </Container>
    );
  }
}

export default Dashboard;
