import * as React from 'react';
import styled from 'styled-components';
import colors from '@ivx/colors';

console.log(colors);

const Styled = styled.button`
  color: tomato;
`;

const Button = () => <Styled>test</Styled>;

export default Button;
