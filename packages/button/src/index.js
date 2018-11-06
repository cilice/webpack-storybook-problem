import * as React from 'react';
import colors from '@ivx/colors';
import styled from 'styled-components';

const Styled = styled.button`
  color: ${colors.white};
`;

const Button = () => <Styled>test</Styled>;

export default Button;
