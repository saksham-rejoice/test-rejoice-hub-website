export default function UpArrow({ stroke }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
    >
      <path
        d="M1 7L7 1M7 1C5.66667 1.25 2.75 1.75 1 1M7 1C6.75 2.25 6.25 5 7 7"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}
