export const TwoArrow = ({
  height,
  width,
}: {
  height?: string;
  width?: string;
}) => {
  return (
    <svg
      style={{
        cursor: "pointer",
      }}
      width={width ? width : "19"}
      height={height ? height : "19"}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.14062 10.5469L9.89062 14.2969L13.6406 10.5469"
        stroke="#003E75"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.14062 5.29688L9.89062 9.04688L13.6406 5.29688"
        stroke="#003E75"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
