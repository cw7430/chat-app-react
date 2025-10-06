import Container from "@mui/material/Container";
import styles from "./message-container.module.css";

import type {MessageListResponseDto} from "@/apis/schemas/message.schema.ts";
import type {UserResponseDto} from "@/apis/schemas/user.schema.ts";

interface Props {
  messageList: MessageListResponseDto;
  user: UserResponseDto | null;
}

export default function MessageContainer(props: Props) {
  const {messageList, user} = props;

  return (
      <div>
        {messageList.map((message, idx) => {
          const prevUser = messageList[idx - 1]?.nickName;
          const isMyMessage = message.nickName === user?.nickName;
          const isSystem = message.nickName === "system";

          return (
              <Container key={message.messageId} sx={{
                padding: "0",
                marginBottom: "5px",
              }}>
                {
                  isSystem ? (
                      <div className={styles.systemMessageContainer}>
                        <p className={styles.systemMessage}>{message.chat}</p>
                      </div>
                  ) : isMyMessage ? (
                      <div className={styles.myMessageContainer}>
                        <div className={styles.myMessage}>{message.chat}</div>
                      </div>
                  ) : (
                      <div className={styles.yourMessageContainer}>
                        <img
                            src="/profile.jpeg"
                            className={styles.profileImage}
                            style={
                              idx === 0 || prevUser === user?.nickName || prevUser === "system"
                                  ? {visibility: "visible"}
                                  : {visibility: "hidden"}
                            }
                        />
                        <div className={styles.yourMessage}>{message.chat}</div>
                      </div>
                  )
                }
              </Container>
          );
        })}
      </div>
  );
}