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

interface ContactModalProps {
    contactVisible: boolean,
    setContactVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactInner = styled.div`
    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    z-index: 999;
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
    width: 600px;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;

    border-radius: 16px;
    border: 1px solid #2D2D2D;
    background: #fff;

    @media screen and (max-width: 700px) {
        width: 400px;
    }
`

const ContactList1 = styled.div`
    display: flex;
    justify-content: space-between;
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
    color: #101010;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    margin: auto;
    font-weight: 600;
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

    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.4);
    background: #f8f8f8;
    color: black;
`

const ContactList3Textarea = styled.textarea`
    display: flex;
    padding: 16px 16px;
    align-items: center;
    gap: 16px;
    align-self: stretch;

    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.4);
    background: #f8f8f8;
    color: black;
`

const CustomButtonWrap = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`

const ContactModal:React.FC<ContactModalProps> = ({ contactVisible, setContactVisible}) => {

    const emailRef = useRef(null);
    const userRef = useRef(null);
    const [errorInfo, setErrorInfo] = useState({
        email: '',
        username: ''
    })

    const validate = (email: string, username: string) => {
        let error = {
            email: '',
            username: ''
        };

        let errorFlag = false;

        if(email == '') {
            error.email = 'Please enter the Your Email';
            errorFlag = true;
        } else {
            let validEmail = String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if(validEmail == null) {
                error.email = 'Type your email correctly!';
                errorFlag = true;
            }
        }
        if (username == '') {
            error.username = 'Please enter the Your Username';
            errorFlag = true;
        }
        if(!errorFlag) {
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
        let username = userRef.current ? userRef.current['value'] : '';
        console.log('email ==> ', email);
        setErrorInfo(validate(email, username));
    }

  return (
    <>
    { contactVisible ? 
        <ContactInner>
            <MainContactForm>
                <ContactList1>
                    <ContactLogo>
                        <Image
                            src={'/Logo/LogoAndTitle.png'}
                            alt='LogoTitle'
                            width={200}
                            height={120}
                        />
                    </ContactLogo>
                    <div onClick={() => setContactVisible(false)}>
                        <CustomCloseBtn />
                    </div>
                </ContactList1>
                <ContactList2>
                    <ContactList2Title>
                        Contact Us
                    </ContactList2Title>
                    <ContactList2Content>
                        Enter your e-mail to stay updated on our latest news
                    </ContactList2Content>
                </ContactList2>
                <ContactList3>
                    <ContactList3Input placeholder='Username' name='username' ref={userRef}/>
                    <div className='text-[18px] text-red-700 pl-3 -mt-3'>{errorInfo.username}</div>
                </ContactList3>
                <ContactList3>
                    <ContactList3Input placeholder='EMAIL' name='email' ref={emailRef}/>
                    <div className='text-[18px] text-red-700 pl-3 -mt-3'>{errorInfo.email}</div>
                </ContactList3>
                <ContactList3>
                    <ContactList3Textarea placeholder='Message' name='message' />
                </ContactList3>
                <CustomButtonWrap onClick={onSubmitHanlder}>
                    <CustomButton content='SEND'/>
                </CustomButtonWrap>
            </MainContactForm>
        </ContactInner>
    : <></> }
    </>
  )
}

export default ContactModal;
