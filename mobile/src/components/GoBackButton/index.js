import React from 'react';

import { GoBackButtonContainer, GoBackButtonText } from './styles';

const GoBackButton = ({ children, ...rest }) => {
  return (
    <GoBackButtonContainer {...rest}>
      <GoBackButtonText>{children}</GoBackButtonText>
    </GoBackButtonContainer>
  );
};

export default GoBackButton;
