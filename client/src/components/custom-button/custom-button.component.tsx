import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

interface CustomButtonInterface {
  children: any;
  props?: any;
  onClick: () => any;
  inverted?: boolean;
}

const CustomButton: React.FC<CustomButtonInterface> = ({
  children,
  ...props
}) => <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;

export default CustomButton;
