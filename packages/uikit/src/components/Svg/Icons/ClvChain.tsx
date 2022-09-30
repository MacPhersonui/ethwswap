import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 50 50" {...props}>
      <defs>
        <filter x="-31.5%" y="-31.6%" width="163.1%" height="163.2%" filterUnits="objectBoundingBox" id="filter-1">
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient x1="100%" y1="0.105881188%" x2="0.106115882%" y2="99.9999439%" id="linearGradient-2">
          <stop stop-color="#A9FFE0" offset="39.5833%" />
          <stop stop-color="#86D5FF" offset="100%" />
        </linearGradient>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Logo" filter="url(#filter-1)" transform="translate(9.000000, 9.000000)">
          <path d="M28.9107,0 L9.12968,0 C4.0875,0 0,4.08316 0,9.12 L0,28.88 C0,33.9168 4.0875,38 9.12968,38 L28.9107,38 C33.9528,38 38.0403,33.9168 38.0403,28.88 L38.0403,9.12 C38.0403,4.08316 33.9528,0 28.9107,0 Z" id="Path" fill="url(#linearGradient-2)" fill-rule="nonzero" />
          <path d="M19.0202,31.16 C25.7431,31.16 31.1931,25.7158 31.1931,19 C31.1931,12.2842 25.7431,6.84 19.0202,6.84 C12.2973,6.84 6.84729,12.2842 6.84729,19 C6.84729,25.7158 12.2973,31.16 19.0202,31.16 Z M16.8719,12.5623 L21.1682,12.5623 L21.1682,16.8992 L16.8724,16.8992 L16.8724,21.1006 L21.1682,21.1006 L21.1682,25.4375 L16.8719,25.4375 L16.8719,21.2361 L12.5761,21.2361 L12.5761,16.8992 L16.8719,16.8992 L16.8719,12.5623 Z M21.1689,16.8992 L25.4652,16.8992 L25.4652,21.2361 L21.1689,21.2361 L21.1689,16.8992 Z" id="Shape" fill="#000000" />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
