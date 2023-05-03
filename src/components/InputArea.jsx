import { useState } from "react";
/* 使用 Material UI CSS */
import { Box, Button, Typography, InputBase } from "@mui/material";
/* import 主題顏色、resort function */
import { theme, resort } from "../utils";

/* ------------ InputArea ----------------
      接收 setTodos, isSwitchOn props
      - 設定 value state 控制 input 輸入值
 ----------------------------------------- */
const InputArea = ({ setTodos, isSwitchOn }) => {
  const [value, setValue] = useState("");

  /* 當輸入 input, 更新 value state */
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  /* 加入 todo 時，先確認 input 值是否為空，再進行排序並更新 todos */
  const handleButtonClick = () => {
    if (value === "") return;
    setTodos((prev) => {
      const newTodos = [
        ...prev,
        { id: new Date().toString(), todo: value, isFinished: false },
      ];
      return resort(newTodos, isSwitchOn);
    });
    /* 清除 input 區域值 */
    setValue("");
  };

  return (
    <Box width="90%" position="absolute" bottom="25px" m="0 35px 0 0 ">
      <Typography>Add to list</Typography>
      <Box display="flex" alignItems="center" mt="3px">
        {/* Material UI InputBase Component */}
        <InputBase
          sx={{
            flex: 1,
            padding: "6px 12px",
            backgroundColor: theme.greyish,
            borderRadius: "4px",
          }}
          /* 讓 input 由 React 控制 */
          value={value}
          /* 當值改變，觸發 event handler */
          onChange={(e) => handleInputChange(e)}
        />
        {/* Material UI Button Component */}
        <Button
          variant="contained"
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
            backgroundColor: theme.blueish,
            padding: "0",
            ml: "8px",
            fontSize: "25px",
            borderRadius: "4px",
            boxShadow: "unset",
          }}
          onClick={handleButtonClick}
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default InputArea;
