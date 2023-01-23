import { useEffect, useRef, useState } from "react";

interface  Props {
  children: React.ReactNode
}

export default function VirtualCard({
	children
}: Props) {
	const [inView, setInView] = useState(false);
	const parentRef = useRef(null);

	useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setInView(true)
				} else {
					setInView(false)
				}
			})
    })

    observer.observe(parentRef.current!);

    return () => observer.disconnect()
  }, []);

	return (
			<div 
				className={[
          "virtual-card",
          inView ? "show" : ""
        ].join(" ")}
				ref={parentRef}
			>
				{inView ? children : null}
			</div>
	);
}