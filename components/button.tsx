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
        "px-4 py-3 text-center  border-2 hover:text-secondary will-change-auto transition-colors ease-linear duration-150 border-secondary hover:bg-white bg-secondary   text-text",
        {
          "bg-text": inverse,
          "text-secondary  border-secondary": inverse,
          "bg-transparent border-transparent hover:border-b-white hover:bg-transparent hover:text-white":
            textOnly,
        }
      )}
      {...props}
    >
      <p className="text-button">{children}</p>
    </button>
  );
}
