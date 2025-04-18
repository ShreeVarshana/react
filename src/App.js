import Additem from './Additem';
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
  ]);

  const [newItem, setnewItem] = useState('')

  const id = items.length ? items[items.length - 1].id + 1 : 1;

  const addItem = (content) => {
    const addnewItem = { id, checked: false, content }
    const listItems = [...items, addnewItem]
    setitems(listItems)
    localStorage.setItem("todo_lists", JSON.stringify(listItems))

  }

  const handleSubmit = (e) => {
    e.preventDefault() //this prevents the form for loading again and again while entering, since the default settings of the form is loading everytime the whole page when something is entered
    if (!newItem) return;
    console.log("Submitted")
    addItem(newItem)
    setnewItem('')
  }

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

      <Additem
        newItem={newItem}
        setnewItem={setnewItem}
        handleSubmit={handleSubmit}
      />

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