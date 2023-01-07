import { Form, Field } from 'formik';
import styled from 'styled-components';

export const NewContactForm = styled(Form)`
  margin-right: auto;
  margin-left: auto;
  width: 550px;
  text-align: start;
  font-weight: bold;
  color: grey;
`;

export const NameInput = styled(Field)`
  min-width: 155px;
  margin-left: 36px;
  margin-bottom: 10px;
  height: 30px;
  font-size: 16px;
`;

export const NumberInput = styled(Field)`
  min-width: 155px;
  margin-left: 10px;
  margin-bottom: 10px;
  height: 30px;
  font-size: 16px;
`;

export const AddBtn = styled.button`
  width: 80px;
  height: 30px;
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

export const Error = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: red;
  font-weight: normal;
`;
