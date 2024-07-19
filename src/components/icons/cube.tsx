import * as React from "react";
import { JSX } from "react/jsx-runtime";

const SvgComponent = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="0.5" y="0.5" width="9" height="9" fill="white" stroke="#2254F4" />
  </svg>
);
export default SvgComponent;
