import styled from "styled-components"


export const Wrapper = styled.div`
    height: 5.2rem;
    background-color: red;
    background-color: ${({theme})=> theme.bgc};
    /* padding: 1.7rem; */
    -webkit-box-shadow: 0px 0px 2px -1px rgba(20,19,20,1);
    -moz-box-shadow: 0px 0px 2px -1px rgba(20,19,20,1);
    box-shadow: 0px 0px 8px -1px rgba(10,9,20,1);
`

export const ContainerIMG = styled.div`
    display:flex;
    justify-content:flex-start;
  padding: 1rem 1.3rem;
    @media (max-width: 600px) {
        display:flex;
    align-items: center;
    justify-content:center;
  }
`
