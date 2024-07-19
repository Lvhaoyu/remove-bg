import * as React from "react";
import { JSX } from "react/jsx-runtime";

const SvgComponent = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width="22"
    height="29"
    viewBox="0 0 22 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="add" filter="url(#filter0_d_1318_1856)">
      <g id="arrow">
        <path
          id="arrow-border"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.73755 26.267L1.73755 1L20.0561 19.3314H8.92843L8.68979 19.527L1.73755 26.267Z"
          fill="white"
        />
        <path
          id="arrow_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.31677 4.63214L3.31677 22.319L8.00538 17.7882L8.25805 17.5685L16.2108 17.5815L3.31677 4.63214Z"
          fill="#7146E8"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_1318_1856"
        x="0.597382"
        y="0.493259"
        width="20.5989"
        height="27.5473"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.633426" />
        <feGaussianBlur stdDeviation="0.570083" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1318_1856"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1318_1856"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
