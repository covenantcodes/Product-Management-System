import { MouseEventHandler } from "react";

interface Props {
  border: string;
  bgcolor: string;
  color: string;
  label?: React.ReactNode;
  icon?: React.ReactNode; // New optional prop for icon
  padding: string;
  radius: string;
  width: string;
  fontFamily: string;
  fontSize: string;
  marginTop: string;
  cursor: string;
  type?: "button" | "submit" | "reset";
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const CustomButton: React.FC<Props> = ({
  border,
  color,
  bgcolor,
  label,
  icon, // New icon prop
  padding,
  radius,
  width,
  fontSize,
  fontFamily,
  marginTop,
  cursor,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: bgcolor,
        color: color,
        padding: padding,
        border,
        borderRadius: radius,
        width,
        fontFamily,
        fontSize,
        marginTop,
        cursor,
        display: "flex",
        alignItems: "center",
        justifyContent: icon ? "space-between" : "center",
      }}
    >
      {icon && <div style={{ marginRight: "0.5em" }}>{icon}</div>}

      {label}
    </button>
  );
};

export default CustomButton;
