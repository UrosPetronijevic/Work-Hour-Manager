import "./spinner.css";

type SpinnerProps = {
  color?: string;
  size?: "small" | "medium" | "large";
};

export default function Spinner({
  color = "#bae6fd",
  size = "small",
}: SpinnerProps) {
  return (
    <div
      className={`loading-spinner loading-spinner--${size}`}
      style={{ borderTopColor: color }}
    ></div>
  );
}
