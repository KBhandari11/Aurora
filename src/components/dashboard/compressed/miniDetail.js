import React from "react";
import styled from "styled-components";
import MiniTitle from "./titleMini";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    border: none;
    border-radius: 4px;
    background: transparent;

    `;


const   Detail = styled.img`
    width: auto;
    border-radius: 10px;
    height: 90vh;

    `;


const MiniDetail = props => {
    return( 
        <Container>
            <MiniTitle {...props}/>
            <Detail src={props.image} />
        </Container>
    );
};

export default MiniDetail;
