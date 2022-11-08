import { Button, SubHeading } from '../../GlobalStyles'
import { FormContainer, FormWrapper, InputWrapper, Input, FormLink } from './SignUp.styles'

export const SignUp = () => {
  return (
    <>
        <FormContainer>
            <FormWrapper>
                <SubHeading>Sign Up</SubHeading>
                <InputWrapper>
                    <Input 
                        type='text'
                        placeholder='Name'
                    />
                </InputWrapper>
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
                    <label> I agree with Terms & Conditions</label>
                </InputWrapper>
                <InputWrapper>
                    <FormLink to='/sign-in'>Already have an account? Sign In</FormLink>
                </InputWrapper>
                <InputWrapper>
                    <Button>Sign Up</Button>
                </InputWrapper>
            </FormWrapper>
        </FormContainer>
    </>
  )
}
