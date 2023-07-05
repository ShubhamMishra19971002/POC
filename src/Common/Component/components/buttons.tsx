import React, { useRef } from 'react';
import styled from 'styled-components';
import { Outline, Primary } from '../../styles/helper';
import variables from '../../styles/variables.module.scss';

const buttonStyles = () => `
    transition : all ${variables.duration};
    height: 40px;
`;
const primaryFilledStyles = (theme:any) => `
    background-color : ${theme.primaryBgColor};
    border : 1px solid ${theme.primaryBgColor};
    color : ${theme.primaryTextColor};
    &:hover, &:focus{
    background-color : ${theme.primaryBgColorHover};
    border : 1px solid ${theme.primaryBgColorHover};
`;
const primaryOutlineStyles = (theme:any) => `
    background-color : transparent;
    border : 1px solid ${theme.primaryBgColor};
    color : ${theme.primaryBgColor};
    &:hover, &:focus{
    color : ${theme.primaryTextColorHover};
    background-color : ${theme.primaryBgColorHover};
    border : 1px solid ${theme.primaryBgColorHover};
`;
const primaryTextStyles = (theme:any) => `
    background-color : transparent;
    border : 0;
    color : ${theme.primaryBgColor};
    height: auto!important;
    padding: 0;
    text-align: left;
    font-weight: 600;
    line-height: ${variables.size_mdl};
    & .btn-desc{
      font-size: ${variables.size_sm};
    }
    &:hover, &:focus{
      color : ${theme.primaryBgColor};
    }
`;

const PrimaryButton = (theme:any) => `
  ${buttonStyles()}  
  ${primaryFilledStyles(theme:any)}
 
}`;

const outlineButton = (theme:any) => `
  ${buttonStyles()} 
  ${primaryOutlineStyles(theme:any)}
`;

const textButton = (theme:any) => `
  ${buttonStyles()} 
  ${primaryTextStyles(theme:any)}
`;

const ButtonContainer = styled.button.attrs(({ btnTheme }:any) => {
  return {
    className: `btn ${btnTheme === Text ? 'text' : '' } ${btnTheme === Primary ? 'filled' : '' }  ${btnTheme === Outline ? 'outline' : '' }`,
  };
})`
  ${({ theme, btnTheme }:any) =>
    (btnTheme === Primary && PrimaryButton(theme)) ||
    (btnTheme === Outline && outlineButton(theme)) ||
    (btnTheme === Text && textButton(theme))}
`;

export const Button =React.forwardRef((props:any, ref) => {
  let { children, description, theme = Primary, ...rest } = props;
  const localRef = useRef(null);
  rest.ref= ref || localRef;
 
// export function Button({ children, theme = Primary, ...rest }) {
  return (
    <>
     {/* {...(theme === Text ? { value: description } : '')} */}
      <ButtonContainer btnTheme={theme} {...rest}>
        {children}
        {/* {theme === Primary && <span className="d-block fw-r btn-desc">{description}</span>} */}
      </ButtonContainer>
    </>
  );
})