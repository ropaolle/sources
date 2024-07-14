import type { SVGProps } from "react";

export function ClarityHostSolid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      {...props}
    >
      <circle cx={18} cy={25.64} r={1.5} fill="currentColor"></circle>
      <path
        fill="currentColor"
        d="M26.5 1.86h-17A1.5 1.5 0 0 0 8 3.36v30.5h20V3.36a1.5 1.5 0 0 0-1.5-1.5M18 28.64a3 3 0 1 1 3-3a3 3 0 0 1-3 3m6-17H12v-1.6h12Zm0-4H12V6.06h12Z"
      ></path>
    </svg>
  );
}

export function ClarityClockLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14"
        className="clr-i-outline clr-i-outline-path-1"
      ></path>
      <path
        fill="currentColor"
        d="M18.92 18.4v-7.65a1 1 0 0 0-2 0v8.72l5.9 4a1 1 0 1 0 1.11-1.66Z"
        className="clr-i-outline clr-i-outline-path-2"
      ></path>
      <path
        fill="currentColor"
        d="M8 17.94a9.94 9.94 0 0 1 15.41-8.35l.85-1.36a11.55 11.55 0 1 0-8.53 21L16 27.7a10 10 0 0 1-8-9.76"
        className="clr-i-outline clr-i-outline-path-3"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}

export function ClarityClockSolid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m6.2 21.18a1 1 0 0 1-1.39.28l-5.9-4v-8.71a1 1 0 0 1 2 0v7.65l5 3.39a1 1 0 0 1 .29 1.39m-.35-14.95a11.39 11.39 0 1 0-8.54 20.83L15 30.63a13 13 0 1 1 9.7-23.77Z"
        className="clr-i-solid clr-i-solid-path-1"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}
