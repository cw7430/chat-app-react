import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import styles from "./input-field.module.css";

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: (e: React.FormEvent) => void;
}

export default function InputField(props: Props) {
  const {message, setMessage, sendMessage} = props;

  return (
      <div className={styles.inputArea}>
        <div className={styles.plusButton}>+</div>
        <form onSubmit={sendMessage} className={styles.inputContainer}>
          <TextField
              placeholder="Type in here…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              size="small"
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  height: "50px",
                  border: "none",
                  borderRadius: 0,
                  backgroundColor: "white",
                  boxShadow: "none",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& input": {
                  paddingLeft: "5px",
                  "&:focus": {
                    outline: "none",
                  },
                },
              }}
          />
          <Button
              disabled={message === ""}
              type="submit"
              sx={{
                minWidth: 70,
                borderRadius: 0,
                backgroundColor: "#F7E600",
                color: "black",
                "&:hover": {
                  backgroundColor: "#ffea00",
                  cursor: "pointer",
                },
                "&:active": {
                  backgroundColor: "yellow",
                },
              }}
          >
            전송
          </Button>
        </form>
      </div>
  );
}