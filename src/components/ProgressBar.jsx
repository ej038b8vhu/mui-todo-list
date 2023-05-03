/* 使用 Material UI CSS */
import { Box, Typography, LinearProgress } from "@mui/material";
/* import 主題顏色 */
import { theme } from "../utils";

/* -------- ProgressBar ---------
      接收 todos prop 計算完成度
 -------------------------------- */
const ProgressBar = ({ todos }) => {
  const totalTodos = todos.length;
  const itemFished = todos.filter((todo) => todo.isFinished).length;
  /* 計算 Todos 完成度，進位至整數 */
  const progress =
    totalTodos > 0 ? Math.round((itemFished / totalTodos) * 100) : 0;

  return (
    <Box
      display="flex"
      alignItems="center"
      borderTop={`1px solid ${theme.blueAccent}`}
      m="0 35px 10px 0"
      pt="10px"
    >
      <Typography>{progress}%</Typography>
      {/* Material UI LinearProgress Component */}
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: "12px",
          flex: 1,
          ml: "5px",
          borderRadius: "8px",
          backgroundColor: theme.greyish,
          /* 修改 Material UI LinearProgress default 樣式 */
          "& .MuiLinearProgress-bar": {
            borderRadius: "8px",
            backgroundColor: theme.purpleAccent,
          },
        }}
      />
    </Box>
  );
};

export default ProgressBar;
