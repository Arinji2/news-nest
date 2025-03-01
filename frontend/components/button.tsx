import { cn } from "@/utils/cn";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  inverse?: boolean;
  textOnly?: boolean;
};
export default function Button({
  className,
  inverse,
  textOnly,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-3 text-center text-text border-2 hover:text-secondary will-change-auto transition-colors ease-linear duration-150 border-secondary hover:bg-white bg-secondary   ",
        className,
        {
          " text-text hover:bg-text  bg-transparent  border-text": inverse,

          "bg-transparent border-transparent hover:border-b-white hover:bg-transparent hover:text-white":
            textOnly,
        },
      )}
      style={{ fontSize: "16px", letterSpacing: "-0.02em", fontWeight: 700 }}
      {...props}
    >
      {children}
    </button>
  );
}
