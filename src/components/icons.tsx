export function ArrowRight({ size = 4 }: { size?: number }) {
  return (
    <svg
      width={size * 4}
      height={size * 4}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="1" width="2" height="16" fill="white" />
      <rect x="6" y="3" width="2" height="12" fill="white" />
      <rect x="8" y="6" width="2" height="6" fill="white" />
      <rect x="10" y="8" width="2" height="2" fill="white" />
    </svg>
  );
}
