import styled from 'styled-components'

export const Form = styled.div`
max-width: 700px;
width: 100%;
margin: 200px auto;

.wrapper_form {
  background-color: #fff;
  padding: 1rem;
  border-radius: 6px;
  width: 100%;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

h1 {
  text-align: center;
  padding: 1rem 0;
}

.form_field {
  padding: 1rem 0;
}


label {
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}

input {
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 1rem;
  outline: none;
  border: 2px solid #374151;
  border-radius: 3px;
}


input:focus, textarea:focus {
  border: 2px solid #6366F1;
}

textarea {
  padding: 1rem;
  width: 100%;
  resize: none;
  border: 2px solid #374151;
  min-height: 300px; 
}

.btn {
  display: flex;
  justify-content: center
}

button {
  padding: 1rem 1.5rem;
  border-radius: 5px;
  background-color: #34D399;
  color: white;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;
}
`
