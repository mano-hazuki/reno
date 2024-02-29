import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function PrimaryButton({ className = "", disabled, children, ...props }: Props) {
  return (
    <button
      className={ "px-4 py-2 bg-sky-500 border border-transparent rounded-md font-normal text-xs text-white tracking-wider" + className }
      disabled={ disabled } { ...props }>
      { children }
    </button>
  );
}

// export default function PrimaryButton({
//                                         className = "",
//                                         disabled,
//                                         children,
//                                         ...props
//                                       }: ButtonHTMLAttributes<HTMLButtonElement>) {
//   return (
//     <button
//       { ...props }
//       className={
//         `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
//           disabled && "opacity-25"
//         } ` + className
//       }
//       disabled={ disabled }
//     >
//       { children }
//     </button>
//   );
// }
