'use client'

import { Bell, Check, X } from "lucide-react";
import "./app.css";
import { Notification } from "./components";

export default function App() {
  return (
    <>
      <div className="notification-list">
        <Notification.Root>
          <Notification.Icon icon={Bell} />
          <Notification.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Notification.Content>
          <Notification.ActionsButton>
            <Notification.ActionButton onClick={() => console.log("cancel")}>
              <Notification.Icon icon={X} />
            </Notification.ActionButton>
            <Notification.ActionButton onClick={() => console.log("confirm")}>
              <Notification.Icon icon={Check} />
            </Notification.ActionButton>
          </Notification.ActionsButton>
        </Notification.Root>
      </div>
    </>
  );
}
