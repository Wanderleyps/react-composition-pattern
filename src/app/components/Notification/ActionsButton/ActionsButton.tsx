import { ReactNode } from "react";

import "./styles.css";

interface ActionsButtonProps {
    children: ReactNode;
}

export function ActionsButton(props: ActionsButtonProps) {
    return (
        <div className="actions-button-container">
            {props.children}
        </div>
    )
}