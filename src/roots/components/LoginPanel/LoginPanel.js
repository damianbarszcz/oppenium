import styled from 'styled-components';

const LoginPanelSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-color:#FFFFFF;
`
const Container = styled.div`
  max-width:1540px;
  margin:auto;
`
const LoginPanelBlock = styled.div`
  padding: 0rem 5rem;
`
const LoginPanelInner = styled.div`
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
`
const LoginPanelHeader = styled.header`
  font-family: 'Radio Canada', sans-serif;
`
const LoginPanelHeaderTitle = styled.h1`
  font-size:2.35rem;
  font-weight: 600;
  color:#17183B;
`
const LoginPanelHeaderCaption = styled.p`
  font-size:1rem;
  font-weight: 400;
  text-transform: uppercase;
  color:#89898E;
`
const Form = styled.form`
  margin-top:2.5rem;
  min-width:415px;
  width:100%;
`
const FormLabel = styled.label`
  display: block;
  padding: 1rem 0 1rem;
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const FormInput = styled.input`
  margin-bottom: 1rem;
  box-sizing: border-box;
  padding: 1rem 2rem;
  min-width: 100%;
  border:1px solid #CFCFCF;
  font-family: 'Radio Canada', sans-serif;
  font-size: 1rem;
  color:#17183B;

  &:focus { outline: none; }
`
const FormSubmit = styled.button`
  margin-top:2rem;
  padding: 1rem 2rem;
  min-width: 100%;
  min-height: 54px;
  text-transform: uppercase;
  font-family: 'Radio Canada', sans-serif;
  background-color:#5D5FEF;
  transition: 0.25s ease-in-out;
  border:0;
  cursor: pointer;
  color:#FFFFFF;
  font-weight: 600;

  &:hover { background-color: #4E50C8; }
`
const LoginPanelRegister = styled.div`
  padding: 1.5rem 2rem;
  text-align: center;
`
const LoginPanelRegisterCaption = styled.p`
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const LoginPanelRegisterCaptionLink = styled.a`
  text-decoration: none;
  color:#5D5FEF;
`

const LoginPanel = (props) => {

    return (
        <LoginPanelSection>
            <Container>
                <LoginPanelBlock>
                    <LoginPanelInner>
                        <LoginPanelHeader>
                            <LoginPanelHeaderCaption>Start for free</LoginPanelHeaderCaption>
                            <LoginPanelHeaderTitle>Sign in</LoginPanelHeaderTitle>
                        </LoginPanelHeader>

                        <Form onSubmit={props.handleForm}>
                            <FormLabel>Email address:</FormLabel>

                            <FormInput name="email" type="text" value={ props.email } onChange={e => props.get_email(e.target.value) } tabIndex="1" />

                            <FormLabel>Password:</FormLabel>

                            <FormInput name="password" type="password" value={ props.password } onChange={e => props.get_password(e.target.value) } tabIndex="2"/>

                            <FormSubmit type="submit" tabIndex="3">Login</FormSubmit>
                        </Form>

                        <LoginPanelRegister>
                            <LoginPanelRegisterCaption>I don’t have an account ?
                                <LoginPanelRegisterCaptionLink href="/register" target="_self"> Sign up</LoginPanelRegisterCaptionLink>
                            </LoginPanelRegisterCaption>
                        </LoginPanelRegister>
                    </LoginPanelInner>
                </LoginPanelBlock>
            </Container>
        </LoginPanelSection>
    );
}

export default LoginPanel;