import styled from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        background: ${theme.colors.border};
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  font-family:'Regular';
  border-radius: 12px;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.secondary : '#373949')};
  transition-property:color,background;
  transition-duration:1s,1s;
  font-size: 16px;
  // font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  letter-spacing: 0.5px;
  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 0 16px;
    height: 48px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 42px;
  `}

  &:hover {
    color:#fff;
    transition-property:color,background;
    transition-duration:1s,1s;
    // background: ${({ theme }) => theme.colors.tertiary};
    ${({ $variant }) => $variant === "default" && "border-radius: 12px;"};
  }
`;

export default StyledMenuItem;
