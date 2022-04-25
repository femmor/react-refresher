export interface ButtonProps {
  type?:
    | "primary"
    | "default"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "outlined";
  children: string;
  onClick?: () => void;
}
