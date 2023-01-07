import styled from 'styled-components';

export const List = styled.ul`
  margin-right: auto;
  margin-left: auto;
  width: 550px;
  list-style-type: circle;
`;

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0 !important;
  gap: 20px;
  line-height: 0;
`;

export const DeleteBtn = styled.button`
  width: 70px;
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 16px;
  font-weight: bold;
  background-color: #f9844d;
  color: #ffffff;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #ffffff;
    color: #f9844d;
    cursor: pointer;
  }
`;
