import React from 'react'

import styled from 'styled-components'

interface CustomButtonProps {
    color?: string,
    content: string,
    fullFlag?: boolean
}

const CustomButton:React.FC<CustomButtonProps> = ({ color, content, fullFlag }) => {
  
  const OuterDiv = styled.div`
    display: flex;
    padding: 2px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    cursor: pointer;
   
    border-radius: 12px;
    border-top: 0.5px solid #D88A41;
    border-right: 0.5px solid #D88A41;
    border-bottom: 2px solid #D88A41;
    border-left: 0.5px solid #D88A41;
    background: linear-gradient(180deg, #9960DA -4.35%, #ED973E 52.36%, #2B9BD2 52.37%, #FFDAA3 100%);


    // &:hover {
    //   border-radius: 8px;
    //   border-top: 0.5px solid #41D8D8;
    //   border-right: 0.5px solid #41D8D8;
    //   border-bottom: 2px solid #41D8D8;
    //   border-left: 0.5px solid #41D8D8;
    //   background: linear-gradient(180deg, #93E5FF -4.35%, #3EEDE2 52.36%, #1897B3 52.37%, #59D2EC 100%); 
      
    //   transition: all 300ms;
    // } 

    
`

  const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 2px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12);
  `

  const ContentInnerWrapper = styled.div`
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    flex: 1 0 0;
    border-radius: 8px;
    border: 0.5px solid #E9E9E9;
    background: linear-gradient(180deg, #7B9C9B 0%, #E99C4A 52.83%, #9C62D8 100%);
    @media screen and (max-width: 720px) {
      padding: 10px 8px;
    }

    @media screen and (max-width: 400px) {
        padding: 10px 2px;
    }

    
  `

  const ContentP = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    margin-top: 1px;
    font-weight: 500;
    line-height: 100%; /* 16px */
    text-transform: uppercase;

  `
  
  return (
    <OuterDiv>
        <ContentWrapper>
            <ContentInnerWrapper>
                <ContentP>
                    { content }
                </ContentP>
            </ContentInnerWrapper>
        </ContentWrapper>
    </OuterDiv>
  )
}

export default CustomButton;
