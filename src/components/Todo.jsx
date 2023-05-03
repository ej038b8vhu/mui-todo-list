/* 使用 Material UI CSS 與 icons */
import { Box, Typography, Checkbox } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
/* import 主題顏色、resort function */
import { theme, resort } from "../utils";

/* ---------------------- Todo -------------------------
      接收 index, todos, setTodos, isSwitchOn props
      - index => 當前 todo 在 todos 裡的索引
 ------------------------------------------------------- */

const Todo = ({ index, todos, setTodos, isSwitchOn }) => {
  /* 根據當前 todo 在 todos 裡是否完成，將 isCheck 值用來控制 checkbox 的 checked 屬性 */
  const isCheck = todos[index].isFinished;

  /* ---
      如果排序鈕未開啟，isFocus 布林值的 true 值會是 todos 的最後一個 todo 項目，
      並將值指定給該 todo 的 checkbox autoFocus 屬性，讓其自動進入視窗畫面。
  --- */
  let isFocus = index === todos.length - 1;

  /* ---
      如果排序鈕開啟，isFocus 布林值的 true 值會是 todos 的最後一個尚未完成的 todo 項目，
      並將值指定給該 todo 的 checkbox autoFocus 屬性，讓其自動進入視窗畫面。
  --- */
  if (isSwitchOn) {
    const unfinishItem = todos.filter((todo) => !todo.isFinished);
    isFocus = index === unfinishItem.length - 1;
  }

  /* ---
      如果當前 todo 的 checkbox 被點擊，
      更新 todos state 裡該項 todo 的 isFinished 布林值，
      並且根據排序鈕是否開啟進行排序並更新 todos state。
  --- */
  const handleCheckboxClick = () => {
    setTodos((prev) => {
      const targetItem = prev[index];
      const copyTodos = [...prev];
      copyTodos.splice(index, 1, {
        ...targetItem,
        isFinished: !targetItem.isFinished,
      });
      return resort(copyTodos, isSwitchOn);
    });
  };

  /* ---
    如果當前 todo 的 刪除鈕被點擊，
    從 todos 刪除當前 todo 並更新。
  --- */
  const handleClearIconClick = () => {
    setTodos((prev) => {
      const copyTodos = [...prev];
      copyTodos.splice(index, 1);
      return copyTodos;
    });
  };

  return (
    <Box
      m="7px 0"
      p="0 8px"
      height="auto"
      minHeight="20%"
      backgroundColor={theme.greyish}
      borderRadius="4px"
      borderLeft={`6px solid ${theme.blueShade}`}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" alignItems="center">
        {/* Material UI Checkbox Component */}
        <Checkbox
          /* 透過 isFocus variable 控制 */
          autoFocus={isFocus}
          /* 透過 isCheck variable 控制 */
          checked={isCheck}
          /* 當點 checkbox 點擊改變，觸發 event handler */
          onChange={handleCheckboxClick}
          sx={{
            "& .MuiTouchRipple-root": {
              color: "transparent",
            },
            "&.Mui-checked": {
              color: theme.blueShade,
            },
          }}
        />
        <Typography
          sx={{
            textDecoration: isCheck && "line-through",
            wordBreak: "break-word",
          }}
        >
          {/* 當前 todo 的文字內容 */}
          {todos[index].todo}
        </Typography>
      </Box>
      {/* Material UI ClearIcon */}
      <ClearIcon
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
          color: theme.purplish,
          fontSize: "18px",
        }}
        /* 當點擊刪除鈕，觸發 event handler */
        onClick={handleClearIconClick}
      />
    </Box>
  );
};

export default Todo;
