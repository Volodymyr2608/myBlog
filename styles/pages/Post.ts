import styled from 'styled-components';

export const Post = styled.div`
  h1 {
    text-align: center;
    padding: 2rem 0;
    margin-top: 30px;
  }
  p {
    padding: 2rem 1rem;
  }

  form {
    margin: 0 auto;
    max-width: 500px;
  }

  .btn {
    display: flex;
    justify-content: flex-end;
  }
  .save {
    display: block;
    margin-top: 15px;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    background-color: #34D399;
    color: white;
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
  }

  .save:hover {
    background-color: #34D399;
  }

  textarea {
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    resize: none;
    border: 1px solid #374151;
    min-height: 200px;
    border-radius: 5px;
  }

  textarea:focus {
    outline: none;
    border: 1px solid #6366F1;
  }
`
