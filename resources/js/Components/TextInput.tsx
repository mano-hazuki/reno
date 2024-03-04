// import {
//   forwardRef,
//   InputHTMLAttributes,
//   useState
// } from "react";
//
// interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
//   hasMask?: boolean;
//   hasError?: boolean;
// }
//
// export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
//   ({ className, hasMask = false, hasError = false, type, ...props }, ref) => {
//     const [masking, setMasking] = useState<boolean>(false);
//     const
//   }
// );
//
//
// // import {
// //   forwardRef,
// //   InputHTMLAttributes,
// //   useEffect,
// //   useImperativeHandle,
// //   useRef
// // } from "react";
// //
// // export default forwardRef(function TextInput(
// //   { type = "text", className = "", isFocused = false, ...props }: InputHTMLAttributes<HTMLInputElement> & {
// //     isFocused?: boolean
// //   },
// //   ref
// // ) {
// //   const localRef = useRef<HTMLInputElement>(null);
// //
// //   useImperativeHandle(ref, () => ( {
// //     focus: () => localRef.current?.focus(),
// //   } ));
// //
// //   useEffect(() => {
// //     if (isFocused) {
// //       localRef.current?.focus();
// //     }
// //   }, []);
// //
// //   return (
// //     <input
// //       { ...props }
// //       type={ type }
// //       className={
// //         "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
// //         className
// //       }
// //       ref={ localRef }
// //     />
// //   );
// // });
