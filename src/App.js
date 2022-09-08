import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allcategories = ['all',...new Set(items.map((item)=>{ return item.category }))];
console.log(allcategories);
function App() {
  const [menuItems, setmenuItems] = useState(items);
  const [categories, setcategories] = useState(allcategories);
  const filterItems=(category)=>{
      if(category==='all'){
        setmenuItems(items);
        return;
      }
      const newitems= items.filter((item)=>{return item.category===category});
      setmenuItems(newitems);
  }
  return <section className='menu section' >
         <div className='title' >
          <h2>Our Menu</h2>
          <div className='underline' ></div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems}  />
          
         </div>
  </section>
}

export default App;
