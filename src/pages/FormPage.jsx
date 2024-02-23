import { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormPage() {
    const [email, setEmail] = useState('');

    function submitEmail(e) {
        e.preventDefault();
        console.log(email);
        toast.success(`${email} enviado com sucesso!`);
        setTimeout(() => setEmail(''), 200);
    }

    return (
        <Page>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                limit={3}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <img src={Logo} alt="logo" />
            <FormContainer onSubmit={submitEmail}>
                <InputEmail
                    id="email"
                    placeholder="Digite seu e-mail"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <ButtonSubmit type="submit">
                    Enviar e-mail
                </ButtonSubmit>
            </FormContainer>
        </Page>
    )
}

const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 180px;
    }
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    
    margin: 0 auto;
    width: 310px;
`
const InputEmail = styled.input`
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding: 10px;
    color: #4C4A4B;
    opacity: 60%;
    font-size: 18px;
    &::placeholder{
        color: #afafaf;
    }
`
const ButtonSubmit = styled.button`
    cursor: pointer;
    width: 100%;
    height: 35px;
    background: #C20C09;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`
