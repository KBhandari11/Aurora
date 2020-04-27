import React from "react";
import styled from "styled-components";
import Carousel, { consts } from 'react-elastic-carousel';
import Detail from './dashDetail';
import heatmap1 from '../../../assets/verticards/heatmap_1.png';
import heatmap2 from '../../../assets/verticards/heatmap_2.png';
import heatmap3 from '../../../assets/verticards/heatmap_3.png';
import heatmap4 from '../../../assets/verticards/heatmap_4.png';
import heatmap5 from '../../../assets/verticards/heatmap_5.png';

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
      isToggleOn: props.Toggle
    }
    this.breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 425, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1000, itemsToShow: 7, itemsToScroll: 7 }
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
      let name_list=["ABC Funds L.P.","DEF Funds L.P.","GHI Funds L.P.","JKL Funds L.P.","MNO Funds L.P."]
      //Inner loop to create children
      for (let j = 0; j < 54; j++) {
        let x = [Math.floor(((Math.random() * 10))/2)]
        children.push(<Detail image={map[x]} name={name_list[x]} amount={"$148,329,201" } date={"4 Feb 2020"} /> )
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

    // Pagination for the Carousel
    const boxShadow = "0 0 1px 2px rgba(0, 0, 0, 0.5)";
    const activeBoxShadow = "0 0 1px 3px rgba(255,255,255,1)";
    const hoveredBoxShadow = "0 0 1px 3px rgba(255,255,255,.5)";

    const Dot = styled.div`
        transition: all 250ms ease;
        margin: 5px;
        background-color: ${({ active }) =>
        active ? "rgba(255,255,255,.5)" : "transparent"};
        font-size: 1.3em;
        content: "";
        height: 5px;
        width: 5px;
        box-shadow: ${({ active }) => (active ? activeBoxShadow : boxShadow)};
        border-radius: 50%;
        position: relative;
        bottom: calc(120vh - 33px);
        &:hover {
        cursor: pointer;
        box-shadow: ${({ active }) =>
          active ? activeBoxShadow : hoveredBoxShadow};
        }

        @media (max-width: 1000px){
            display:none;
          }
      
      `;


    return (
        <Container> 
          <Content>
            <Carousel breakPoints={this.breakPoints} renderArrow={this.myArrow} style={{margin:0}} renderPagination={({ pages, activePage, onClick }) => {
                    return (
                      <div style={{display:"flex", flexDirection:"row"}}>
                        {pages.map(page => {
                          const isActivePage = activePage === page
                          return (
                            <Dot
                              key={page}
                              onClick={() => onClick(page)}
                              active={isActivePage}
                            />
                          )
                        })}
                      </div>
                    )
                  }}>
              {this.createData()}           
            </Carousel>
          </Content>
        </Container>
    );
  }
}

export default Dashboard;
