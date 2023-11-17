import { useState } from "react"

export default function Form({ onAddItem }) {
   const [description, setDescription] = useState("")
   const [quantity, setQuantity] = useState(1)

   function handleSubmit(e) {
      e.preventDefault()

      if (!description) return

      const newItem = { quantity, description, packed: false, id: Date.now() }
      onAddItem(newItem)

      setQuantity(1)
      setDescription("")
   }

   return (
      <form className="add-form" onSubmit={handleSubmit}>
         <h3>What do you need for your trip ✈️</h3>
         <select value={quantity} onChange={(q) => setQuantity(q.target.value)}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
               <option value={num} key={num}>
                  {num}
               </option>
            ))}
         </select>
         <input
            type="text"
            placeholder="text..."
            value={description}
            onChange={(d) => setDescription(d.target.value)}
         />
         <button>Add</button>
      </form>
   )
}
