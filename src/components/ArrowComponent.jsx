import React from "react";

const ArrowComponent = ({ color }) => (
  <svg
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.7926 21.1051L3.47 3.7825"
      stroke={color}
      strokeWidth="4.48311"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M22.3036 6.69892L22.3379 22.6469L6.38867 22.6138"
      stroke={color}
      strokeWidth="4.48311"
      strokeLinecap="square"
    />
  </svg>
);

export default ArrowComponent;
