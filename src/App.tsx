import React, {useState} from "react";
import styles from "./app.module.css";
import InputField from "@/components/input-field";
import MessageContainer from "@/components/message-container";
import type {UserResponseDto} from "@/apis/schemas/user.schema.ts";
import type {MessageListResponseDto} from "@/apis/schemas/message.schema.ts";

export default function App() {

  const [user, setUser] = useState<UserResponseDto | null>(null);
  const [message, setMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<MessageListResponseDto>([]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("보낸 메세지:", message);
  };

  return (
      <div>
        <div className={styles.app}>
          <MessageContainer messageList={messageList} user={user} />
          <InputField message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
  )
}
