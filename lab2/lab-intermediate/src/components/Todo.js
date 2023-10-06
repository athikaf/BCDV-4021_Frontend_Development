import React from "react";

function Todo() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "darkblue" }}>My To-Do List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        style={{ padding: "5px" }}
      />
      <button
        style={{
          backgroundColor: "darkblue",
          color: "white",
          padding: "5px 10px",
          border: "none",
          marginLeft: "5px",
        }}
      >
        {" "}
        Add{" "}
      </button>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        {/* Task items will be added here */}
      </ul>
      <h5 style={{ textAlign: "center", color: "darkblue" }}>
        Made with ❤️ by Athika Fatima
      </h5>
    </div>
  );
}

export default Todo;
