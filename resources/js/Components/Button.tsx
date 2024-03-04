import { ButtonHTMLAttributes } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { classnames } from "@/Lib/classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

function ButtonBase({ className = "", disabled, children, ...props }: Props) {
  return (
    <button
      className={ classnames("inline-flex justify-between items-center gap-2 px-4 py-2 border-2 rounded font-sans", disabled ? "opacity-25" : "", className) }
      disabled={ disabled }
      { ...props }>
      { children }
    </button>
  );
}

export function Button({ className = "", disabled, children, ...props }: Props) {
  return (
    <ButtonBase
      className={ classnames("bg-white border-emerald-400 font-semibold text-sm text-emerald-400 tracking-wide", className) }
      disabled={ disabled }
      { ...props }>
      { children }
    </ButtonBase>
  );
}

export function PrimaryButton({ className = "", disabled, children, ...props }: Props) {
  return (
    <ButtonBase
      className={ classnames("bg-emerald-400 border-emerald-400 font-medium text-sm text-white tracking-wide", className) }
      disabled={ disabled }
      { ...props }>
      { children }
    </ButtonBase>
  );
}

export function DangerButton({ className = "", disabled, children, ...props }: Props) {
  return (
    <ButtonBase
      className={ classnames("bg-red-600 border-red-600 font-semibold text-sm text-white tracking-wide", className) }
      disabled={ disabled }
      { ...props }>
      { children }
    </ButtonBase>
  );
}

interface FollowButtonProps extends Props {
  isFollowing: boolean;
}

export function FollowButton({ className = "", disabled, isFollowing, children, ...props }: FollowButtonProps) {
  return (
    <PrimaryButton type="submit" { ...props }>
      <FontAwesomeIcon className={ classnames(isFollowing ? "text-rose-500" : "text-white") }
                       icon={ faHeart }
                       size={ "xl" }/>
      { isFollowing ? "Following" : "Follow" }
    </PrimaryButton>
  );
}
