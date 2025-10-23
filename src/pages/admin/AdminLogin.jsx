import React, { useState } from 'react';
import styled from 'styled-components';



const PageContainer = styled.div`
  background-color: #121212;
  color: #fff;
  min-height: 100vh;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px; 
  background-color: #1b1b1b;
  border: 1px solid rgba(255, 115, 0, 0.5);
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 0 30px rgba(255, 115, 0, 0.08);
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.headingFont};
  font-size: 1.8rem;
  margin-bottom: 2rem; 
  color: #fff;
  text-align: center; 
`;

const FormField = styled.div`
  margin-bottom: 1.5rem; 
  width: 100%;
`;

const Label = styled.label`
  
  font-family: ${({ theme }) => theme.fonts.secondaryFont};
  color: #ccc;
  font-size: 0.95rem;
  margin-bottom: 0.5rem; 
  display: block; 
`;

const Input = styled.input`
  width: 100%;
  background-color: #0e0f11;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.9rem;
  font-size: 0.95rem;
  color: #eaeaea;
  font-family: ${({ theme }) => theme.fonts.secondaryFont};
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #ff7300;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #ff7300;
  border: none;
  color: #fff;
  font-weight: 600;
  padding: 0.9rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1.2rem; 

  &:hover {
    background-color: #ff8a33;
  }
`;


function AdminLogin() {

  const [values, setValues] = useState({
        username:'',
        password:'',
  });

  const handleChange = (e) =>{
    setValues({...values,[e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <PageContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Admin Dashboard Login</Title>

        <FormField>
          <Label htmlFor="username">Username</Label>
          <Input 
            type="text" 
            placeholder="Enter your Username" 
            name="username"
            id="username" 
            onChange={(e) => handleChange(e)}
            required
          />
        </FormField>

        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            placeholder="Enter Password" 
            name="password" 
            id="password" 
            onChange={(e) => handleChange(e)}
            required
          />
        </FormField>

        <Button type="submit">Log In</Button>
      </Form>
    </PageContainer>
  );
}

export default AdminLogin;