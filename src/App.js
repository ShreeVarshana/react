import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';

function App() {

  const [items, setitems] = useState([
    {
      id: 1,
      checked: false,
      content: "Do Homework"
    },
    {
      id: 2,
      checked: false,
      content: "Play cricket"
    },
    {
      id: 3,
      checked: false,
      content: "Exercise"
    }
  ])

  const handleDelete = (id) => {
    const listitems = items.filter((item) => item.id !== id)
    setitems(listitems)
  }

  const handlecheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setitems(listitems)
    localStorage.setItem("todo_lists", JSON.stringify(listitems))
  }
  let len = items.length

  return (
    <div>
      <Header value="Hello To-Do" />
      <Content
        items={items}
        handlecheck={handlecheck}
        handleDelete={handleDelete}
      />
      <Footer length={len} />
    </div>

  );
}


export default App;