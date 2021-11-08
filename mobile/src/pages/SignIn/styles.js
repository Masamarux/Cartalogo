import styled from 'styled-components';
import { Form as Unform } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2px 20px 0 20px;
  background-color: #5065a8;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-family: 'Nunito-Bold';
  color: #f2eee4;

  margin-bottom: 15px;
`;

export const Form = styled(Unform)`
  width: 100%;
`;
