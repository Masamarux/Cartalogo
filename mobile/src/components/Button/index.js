import React from 'react';

import { ButtonContainer, ButtonText } from './styles';

const Button = ({ children, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
