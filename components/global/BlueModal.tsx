import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

// import Logo from '@/components/logo/Logo'
// import LogoTitle from '@/components/logo/LogoTitle'
import CrossIcon from '@/components/global/Icon/CrossIcon'

import CustomButton from '@/components/global/Button/CustomBtn'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'
import CustomCloseBtn from './Button/CustomCloseBtn'

interface BlueModalProps {
    contactVisible: boolean,
    setContactVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactInner = styled.div`
    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    z-index: 100;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.8);
`

const MainContactForm = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    width: 580px;
    padding: 32px;
    padding-left: 50px;
    padding-right: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;

    border-radius: 64px;
    border: 1px solid rgba(0, 0, 0, 0.40);
    background: linear-gradient(156deg, #F8F8F8 12.79%, #E8E8E8 87.63%);
    box-shadow: 1px 1px 2px 1px rgba(255, 255, 255, 0.80), -1px -1px 2px 1px rgba(0, 0, 0, 0.08), -1px -1px 2px 2px rgba(0, 0, 0, 0.10) inset, 1px 1px 2px 1px rgba(255, 255, 255, 0.90) inset;


    @media screen and (max-width: 700px) {
        width: 400px;
    }
`

const ContactList1 = styled.div`
    position: absolute;
    right: 21px;
    top: 21px;
    align-items: center;
    align-self: stretch;
`

const ContactLogo = styled.div`
    display: flex;
    
    align-items: center;
    gap: 16px;
`

const ContactExit = styled.div`
    cursor: pointer;
    display: flex;
    height: 36px;
    padding: 8px;
    align-items: flex-start;
    gap: 35px;

    border-radius: 8px;
    border: 2px solid var(--Gadien, #FDBD87);

    &:hover {
        border: 2px solid var(--Gadien, #59D2EC );
    }
`

const ContactList2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

const ContactList2Title = styled.p`
    color: #FFF;
    text-align: center;
    font-family: Outfit;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 125% */
`

const ContactList2Content = styled.p`
    color: #101010;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    margin: auto;
    line-height: 24px; /* 150% */
`

const ContactList3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    align-self: stretch;
`

const ContactList3Input = styled.input`
    display: flex;
    padding: 16px 16px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    text-align: center;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.4);
    background: #f8f8f8;
    box-shadow: -2px 2px 8px 0px rgba(0, 0, 0, 0.11) inset;
    color: black;
`

const CustomButtonWrap = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`

const BlueModal: React.FC<BlueModalProps> = ({ contactVisible, setContactVisible }) => {

    const emailRef = useRef(null);

    const [errorInfo, setErrorInfo] = useState({
        email: '',
    })

    const validate = (email: string) => {
        let error = {
            email: '',
        };

        let errorFlag = false;

        if (email == '') {
            error.email = 'Please enter Username';
            errorFlag = true;
        }


        if (!errorFlag) {
            console.log('successfully!!');
            toast.success("Saved Successfully!");
            setContactVisible(false);
            //Email JS
            // TODO: ADD Email to store
        }
        return error;
    };

    const onSubmitHanlder = () => {
        let email = emailRef.current ? emailRef.current['value'] : '';
        console.log('email ==> ', email);
        setErrorInfo(validate(email));
    }

    return (
        <>
            {contactVisible ?
                <ContactInner>
                    <div className='blue-modal'>
                        <ContactList1>
                            <div onClick={() => setContactVisible(false)}>
                                <CustomCloseBtn />
                            </div>
                        </ContactList1>
                        <MainContactForm>
                            <ContactList2>
                                <div className='mx-auto'>
                                    <img
                                        src='/Logo/turkeyLogo.png'
                                        alt='Logo'
                                        className='object-cover object-center'
                                    />
                                </div>
                                <ContactList2Content>
                                    Get Ready to New Exciting Adventures
                                </ContactList2Content>
                            </ContactList2>
                            <ContactList3>
                                <ContactList3Input placeholder='USERNAME' name='email' ref={emailRef} />
                                <div className='text-[18px] text-red-700 pl-3 -mt-3'>{errorInfo.email}</div>
                            </ContactList3>
                            <CustomButtonWrap onClick={onSubmitHanlder}>
                                <CustomButton content="LET'S GO" />
                            </CustomButtonWrap>
                        </MainContactForm>
                    </div>
                </ContactInner>
                : <></>}
        </>
    )
}

export default BlueModal;
