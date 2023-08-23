import styled from 'styled-components';

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  transition: transform 0.2s;

  :hover {
    transform: scale(1.2);
    background-color: lawngreen;
    color: black;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: green;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  border-radius: 15px;
`;
