/* 使用 Material UI CSS */
import { Box, Typography, Switch } from "@mui/material";
/* import 主題顏色、resort function */
import { theme, resort } from "../utils";

/* ---------------- ProgressBar -----------------------
      接收 setTodos, isSwitchOn, setIsSwitchOn prop 
 ------------------------------------------------------ */
const Switcher = ({ setTodos, isSwitchOn, setIsSwitchOn }) => {
  /* 當控制鈕開啟/關閉，更新 isSwitchOn state, 並根據 isSwitchOn 重新排序 todos 並更新 */
  const handleSwitchChange = () => {
    setIsSwitchOn((prev) => !prev);
    setTodos((prev) => resort(prev, !isSwitchOn));
  };

  return (
    <Box
      display="flex"
      justifyContent="end"
      alignItems="center"
      m="0 30px 0 0"
      p="10px 10px 0 0"
      borderTop={`1px solid ${theme.blueAccent}`}
    >
      <Typography>Move done things to end?</Typography>
      {/* Material UI Switch Component */}
      <Switch
        /* 修改 default Material UI css style */
        sx={{
          "&": {
            padding: "5px",
          },
          "& .MuiSwitch-thumb": {
            color: theme.purplish,
          },
          "& .Mui-checked .MuiSwitch-thumb": {
            backgroundColor: theme.greyish,
          },
          "& .MuiSwitch-track": {
            backgroundColor: theme.greyish,
            borderRadius: "20px",
          },
          ".Mui-checked+.MuiSwitch-track": {
            backgroundColor: `${theme.purpleAccent} !important`,
          },
        }}
        /* 當排序鈕改變，觸發 event handler */
        onChange={handleSwitchChange}
      />
    </Box>
  );
};

export default Switcher;
