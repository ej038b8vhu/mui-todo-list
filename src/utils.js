/* 顏色主題設定 */
export const theme = {
  greyish: "#d0d0d0",
  blueish: "#5c6cc6",
  blueAccent: "#354472",
  blueShade: "#4c6ca6",
  purplish: "#8d98cb",
  purpleAccent: "#4c6cd6",
};

/* Todos 排序 function -- 接受一個陣列 & 排序鈕是否開啟(布林值) */
export function resort(arr = [], isSwitchOn) {
  const copyTodos = [...arr];
  if (isSwitchOn) {
    /* 如果排序鈕開啟, 將原有 Todos 依加入時間排序後, 區分為 “未完成 ＆ 未完成” 回傳 */
    copyTodos.sort((a, b) => (a.id > b.id ? 1 : -1));
    let finishTodos = [];
    let unfinishTodos = [];
    copyTodos.forEach((todo) => {
      if (todo.isFinished) {
        finishTodos.push(todo);
      } else {
        unfinishTodos.push(todo);
      }
    });
    return [...unfinishTodos, ...finishTodos];
  } else {
    /* 如果排序鈕未開啟, 將原有 Todos 依加入時間排序後回傳 */
    return copyTodos.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
}
