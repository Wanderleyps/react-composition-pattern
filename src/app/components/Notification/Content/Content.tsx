import "./styles.css";

interface ContentProps {
    children: string;
}

export function Content(props: ContentProps) {
    return (
        <div className="notification-content">
            {props.children}
        </div>
    )
}