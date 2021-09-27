import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了済みのTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
