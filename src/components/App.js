import { useState } from "react"
import Stats from "./Stats"
import PackingList from "./PackingList"
import Form from "./Form"
import Logo from "./Logo"

export default function App() {
   const [items, setItems] = useState([])

   function handleAddItems(item) {
      setItems((items) => [...items, item])
   }

   function handleDeleteItem(id) {
      setItems((items) => items.filter((i) => i.id !== id))
   }

   function handleToggleItem(id) {
      setItems((items) =>
         items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
         )
      )
   }

   function handleClearList() {
      const confirm = window.confirm(
         "Are you sure you want to delete all items?"
      )
      if (confirm) setItems((items) => [])
   }

   return (
      <div className="app">
         <Logo />
         <Form onAddItem={handleAddItems} />
         <PackingList
            items={items}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
            onClearList={handleClearList}
         />
         <Stats items={items} />
      </div>
   )
}
