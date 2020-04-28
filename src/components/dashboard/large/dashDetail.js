import React from "react";
import styled from "styled-components";
import Title from "./titleName";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    border: 1px;

    `;
    


const   Detail = styled.img`
    width: auto;
    border-radius: 4px;
    height: 90vh;
    margin: 8px auto;
    `;



const DashDetail = props => {
    return( 
        <Container>
            <Title {...props}/>
            <Detail src={props.image} />
        </Container>
    );
};

export default DashDetail;
