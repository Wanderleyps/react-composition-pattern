import { ReactNode } from "react";

import "./styles.css";

interface RootProps {
    children: ReactNode
}

export function Root(props: RootProps) {
    return <div className="container">{props.children}</div>
}