import React, { useState } from "react";

function Todos({
  item,
  handleDelete,
  handleEdit,
  setIsUpdate,
  updateBtn,
  checked,
  handleCheckBox,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      checked={}
      <div>
        <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <input
            type={"checkbox"}
            value={item.check}
            onChange={(e) => handleCheckBox(item.id, e.target.value)}
          />
          <p onClick={() => updateBtn(item.id, item.title)}>{item.title}</p>
        </div>
        {/* marginLeft: "20px", marginTop: "-4px" */}
        <p style={{ fontSize: "9px", marginTop: "-4px", marginLeft: "20px" }}>
          {item.createTime}
        </p>
      </div>
      <div>
        <button
          style={{ height: 30, width: "60px" }}
          onClick={() => handleDelete(item.id)}
        >
          delete
        </button>
        <button
          style={{ height: 30, width: "60px" }}
          onClick={() => updateBtn(item.id, item.title)}
        >
          edit
        </button>
      </div>
    </div>
  );
}

export default Todos;
