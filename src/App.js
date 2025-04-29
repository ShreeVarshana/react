import Additem from './Additem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState, useEffect } from 'react';
import Searchitem from './Searchitem';

function App() {

  const API_URL = "http://localhost:3500/items";

  const [items, setitems] = useState([]);

  const [newItem, setnewItem] = useState('')

  const [search, setsearch] = useState('')

  const [fetcherror, setfetcherror] = useState(null)

  useEffect(() => {
    const fetchitems = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) throw Error("Data not received");
        console.log(response)
        const listitems = await response.json();
        setitems(listitems);
        setfetcherror(null)
      }
      catch (error) {
        setfetcherror(error.message)
      }

    }

    (async () => await fetchitems())()

  }, [])

  const id = items.length ? items[items.length - 1].id + 1 : 1;

  const addItem = (content) => {
    const addnewItem = { id, checked: false, content }
    const listItems = [...items, addnewItem]
    setitems(listItems)


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

      <Searchitem
        search={search}
        setsearch={setsearch}

      />
      <main>
        {fetcherror && <p>{`Error : ${fetcherror}`}</p>}
        <Content
          items={items.filter(item => ((item.content).toLowerCase()).includes(search.toLowerCase()))}
          handlecheck={handlecheck}
          handleDelete={handleDelete}
        />
      </main>
      <Footer length={len} />
    </div>

  );
}


export default App;