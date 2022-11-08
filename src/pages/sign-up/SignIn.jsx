import { Button, SubHeading } from '../../GlobalStyles'
import { FormContainer, FormWrapper, InputWrapper, Input, FormLink } from './SignUp.styles'

export const SignIn = () => {
  return (
    <>
        <FormContainer>
            <FormWrapper>
                <SubHeading>Sign In</SubHeading>
                <InputWrapper>
                    <Input 
                        type='email'
                        placeholder='Email'
                    />
                </InputWrapper>
                
                <InputWrapper>
                    <Input 
                        type='password'
                        placeholder='Password'
                    />
                </InputWrapper>
                <InputWrapper>
                    <input type='checkbox' />
                    <label> Remember me</label>
                </InputWrapper>
                <InputWrapper>
                    <FormLink to='/sign-up'>Don't have an account? Sign Up</FormLink>
                </InputWrapper>
                <InputWrapper>
                    <Button>Sign In</Button>
                </InputWrapper>
            </FormWrapper>
        </FormContainer>
    </>
  )
}
