import React from 'react'

import styled from 'styled-components'
import CrossIcon from '../Icon/CrossIcon'

const CustomCloseBtn = () => {

    const OuterDiv = styled.div`
    display: flex;
    padding: 2px;
    flex-direction: column;
    align-items: flex-start;

    cursor: pointer;
   
    border-radius: 8px;
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

    width: 52px;
    height: 52px;
    
`

    const ContentWrapper = styled.div`
    display: flex;
    padding: 4px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: #FFF;
  `

    const ContentInnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    border: 0.5px solid #E9E9E9;
    background: linear-gradient(180deg, #7B9C9B 0%, #E99C4A 52.83%, #9C62D8 100%);
  `

    const ContentP = styled.p`
    color: #FFF;
    padding: 8px 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;

  `

    return (
        <OuterDiv>
            <ContentWrapper>
                <ContentInnerWrapper>
                    <ContentP>
                        {/* <EqualIcon /> */}
                        <CrossIcon />
                    </ContentP>
                </ContentInnerWrapper>
            </ContentWrapper>
        </OuterDiv>
    )
}

export default CustomCloseBtn;
