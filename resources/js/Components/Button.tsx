import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function Button({ className = "", disabled, children, ...props }: ButtonProps) {
  return (
    <button { ...props }
            className={ `inline-flex justify-between items-center px-4 py-2 bg-white border-2 border-sky-500 rounded font-sans font-semibold text-xs text-sky-500 tracking-widest ${ disabled && "opacity-25" }` + className }
            disabled={ disabled }>
      { children }
    </button>
  );
}

export function PrimaryButton({ className = "", disabled, children, ...props }: ButtonProps) {
  return (
    <button { ...props }
            className={ `inline-flex justify-between items-center gap-2 px-4 py-2 bg-sky-500 border border-transparent rounded font-sans font-bold text-xs text-white tracking-widest ${ disabled && "opacity-25" }` + className }
            disabled={ disabled }>
      { children }
    </button>
  );
}

interface FollowButtonProps extends ButtonProps {
  isFollowing: boolean;
}

// TODO: Implement
export function FollowButton({ className = "", disabled, isFollowing, children, ...props }: FollowButtonProps) {

}
