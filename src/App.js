import Additem from './Additem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState, useEffect } from 'react';
import Searchitem from './Searchitem';

function App() {

  const API_URL = "http://localhost:3500/items";

  const [items, setitems] = useState([]);

  const [newItem, setnewItem] = useState('');

  const [search, setsearch] = useState('');

  const [fetcherror, setfetcherror] = useState(null);

  const [isloading, setisloading] = useState(true)

  useEffect(() => {
    const fetchitems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        const data = await response.json(); // Correctly parse the response
        setitems(data.items); // Use data.items to set items
        setfetcherror(null);
      }
      catch (error) {
        setfetcherror(error.message);
      }
      finally {
        setisloading(false)
      }
    };

    setTimeout(() => {
      (async () => await fetchitems())(); // Fetch items after a delay
    }, 2000);
  }, []);

  const id = items.length ? items[items.length - 1].id + 1 : 1;

  const addItem = (content) => {
    const addnewItem = { id, checked: false, content };
    const listItems = [...items, addnewItem];
    setitems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission reloading the page
    if (!newItem) return;
    console.log("Submitted");
    addItem(newItem);
    setnewItem('');
  };

  const handleDelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setitems(listitems);
  };

  const handlecheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setitems(listitems);
  };

  let len = items.length;

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
        {isloading && <p>Loading Items</p>}
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
