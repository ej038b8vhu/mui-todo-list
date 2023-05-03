/* 使用 Material UI CSS */
import { Box } from "@mui/material";
/* import component */
import Todo from "./Todo";

/* ---------------------- Todos ----------------------------
    接收 todos, setTodos, isSwitchOn props, 並傳給各別 todo
 ----------------------------------------------------------- */
const Todos = ({ todos, setTodos, isSwitchOn }) => {
  return (
    <Box
      sx={{
        height: "45%",
        p: "0 28px 0px 0",
        overflow: "auto",
      }}
    >
      {/* map through todos */}
      {todos.map((todo, i) => (
        <Todo
          /* 唯一 key 值，協助 React 區別個別項目 */
          key={todo.id}
          index={i}
          todos={todos}
          setTodos={setTodos}
          isSwitchOn={isSwitchOn}
        />
      ))}
    </Box>
  );
};

export default Todos;
