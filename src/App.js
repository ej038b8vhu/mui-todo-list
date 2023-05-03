import { useState, useEffect } from "react";

/* 使用 Material UI CSS */
import { Box } from "@mui/material";

/* import components 與 resort function */
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Todos from "./components/Todos";
import Switcher from "./components/Switcher";
import InputArea from "./components/InputArea";
import { resort } from "./utils";

/* ---------- App ----------
    設定 2 個 State:
    - isSwitchOn => 排序鈕是否開啟(布林值)
    - todos => 所有 todos 狀態 : 
      讀取：Local Storage
      結構：{
        id: 加入時間,
        todo: 內容,
        isFinished: 布林值
      }
  ---------------------------  */
function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  /* todos 初始從 localStorage 讀取並排序 */
  const [todos, setTodos] = useState(() => {
    let todosArr = JSON.parse(localStorage.getItem("todos")) || [];
    if (todosArr.length > 0) {
      todosArr = resort(todosArr, false);
    }
    return todosArr;
  });
  /* todos 若有改變，更新localStorage */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <Box
        sx={{
          /* 背景漸層色 藍 -> 紫 */
          background:
            "linear-gradient(180deg, rgba(171, 193, 225, 1) 25%, rgb(171, 174, 208) 80%);",
          width: "500px",
          minWidth: "320px",
          height: "75vh",
          minHeight: "480px",
          padding: "40px 0 10px 25px",
          position: "relative",
        }}
      >
        {/* Component 1 -> Header */}
        <Header title="Todo List" subtitle="Adding things to do" />

        {/* Component 2 -> ProgressBar */}
        <ProgressBar todos={todos} />

        {/* Component 3 -> Todos */}
        <Todos todos={todos} setTodos={setTodos} isSwitchOn={isSwitchOn} />

        {/* Component 4 -> Switcher */}
        <Switcher
          setTodos={setTodos}
          isSwitchOn={isSwitchOn}
          setIsSwitchOn={setIsSwitchOn}
        />

        {/* Component 5 -> InputArea */}
        <InputArea todos={todos} setTodos={setTodos} isSwitchOn={isSwitchOn} />
      </Box>
    </div>
  );
}

export default App;
