import React, { useState } from "react";

const CRUD = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Task 1", updated: false },
    { id: 2, name: "Task 2", updated: false },
    { id: 3, name: "Task 3", updated: false },
  ]); // 초기 데이터 리스트
  const [selectedItems, setSelectedItems] = useState([]); // 체크박스로 선택된 항목
  const [newItem, setNewItem] = useState(""); // 새로 추가할 아이템

  // 아이템 추가하기
  const handleAddItem = () => {
    if (!newItem.trim()) return;

    const newItemObject = {
      id: items.length + 1, // 간단한 ID 생성
      name: newItem,
      updated: false,
    };

    setItems([...items, newItemObject]);
    setNewItem("");
  };

  // 선택된 아이템 삭제하기
  const handleDeleteSelected = () => {
    setItems(items.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  // 선택된 아이템 업데이트
  const handleUpdateSelected = () => {
    setItems(
      items.map((item) =>
        selectedItems.includes(item.id) ? { ...item, updated: true } : item
      )
    );
    setSelectedItems([]);
  };

  // 체크박스 상태 업데이트
  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div>
      <h1>Item Management</h1>

      {/* 아이템 추가 */}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add</button>

      {/* 아이템 리스트 */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.name} {item.updated && "(Updated)"}
          </li>
        ))}
      </ul>

      {/* 선택된 아이템 삭제 */}
      <button onClick={handleDeleteSelected} disabled={!selectedItems.length}>
        Delete Selected
      </button>

      {/* 선택된 아이템 업데이트 */}
      <button onClick={handleUpdateSelected} disabled={!selectedItems.length}>
        Update Selected
      </button>
    </div>
  );
};

export default CRUD;
