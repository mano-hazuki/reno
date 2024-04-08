import { useCallback, useEffect, useRef } from "react";

export function useAnimationFrame(callback = (animatedAt: number) => {}) {
	const requestIdRef = useRef<number>(-1);
	const loop = useCallback(
		(animatedAt: number) => {
			requestIdRef.current = requestAnimationFrame(loop);
			callback(animatedAt);
		},
		[callback],
	);
	useEffect(() => {
		requestIdRef.current = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(requestIdRef.current);
	}, [loop]);
}
