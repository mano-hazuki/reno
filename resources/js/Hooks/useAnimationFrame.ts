import { useEffect, useRef } from "react";

export function useAnimationFrame(callback = () => {}) {
	const idRef = useRef<number>(-1);
	const loop = () => {
		idRef.current = requestAnimationFrame(loop);
		callback();
	};
	useEffect(() => {
		idRef.current = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(idRef.current);
	}, []);
}
