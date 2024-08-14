import React, { useState } from 'react';
import './Tablecomp.css';

const Tablecomp = () => {
  const [items, setItems] = useState([
    { id: 3, name: 'Item 3', people: 45, link: '/item3', stock: 'available', address: '123 Main St', phone: '123-456-7890' },
    { id: 4, name: 'Item 4', people: 25, link: '/item4', stock: 'available', address: '456 Oak St', phone: '987-654-3210' },
    { id: 5, name: 'Item 5', people: 15, link: '/item5', stock: 'out of stock', address: '789 Pine St', phone: '555-555-5555' },
    { id: 6, name: 'Item 6', people: 35, link: '/item6', stock: 'available', address: '321 Maple St', phone: '111-222-3333' },
  ]);

  const handleDelete = (id) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  const toggleStock = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, stock: item.stock === 'available' ? 'out of stock' : 'available' } : item
    );
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    const newItem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      name: `Item ${items.length + 1}`,
      people: Math.floor(Math.random() * 100),
      link: `/item${items.length + 1}`,
      stock: 'available',
      address: `${items.length + 1} New Address St`,
      phone: `555-555-${String(items.length).padStart(4, '0')}`,
    };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>ID</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Nbr of People</th>
            <th style={{ textAlign: 'center' }}>Address</th>
            <th style={{ textAlign: 'center' }}>Phone</th>
            <th style={{ textAlign: 'center' }}>Operate</th>
            <th style={{ textAlign: 'center' }}>State</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td style={{ textAlign: 'center' }}>{item.id}</td>
              <td style={{ textAlign: 'center' }}>
                <a href={item.link}>{item.name}</a>
              </td>
              <td style={{ textAlign: 'center' }}>{item.people}</td>
              <td style={{ textAlign: 'center' }}>{item.address}</td>
              <td style={{ textAlign: 'center' }}>{item.phone}</td>
              <td style={{ textAlign: 'center' }}>
                <button className='button1' onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
              <td style={{ textAlign: 'center' }}>
                <button
                  className={item.stock === 'available' ? 'button1' : 'button2'}
                  onClick={() => toggleStock(item.id)}
                >
                  {item.stock}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td id="cols" colSpan="7" className="pagination-footer">
              <div className="pagination-content">
                <input className="pagination-button" type="button" value="Previous" />
                <input className="pagination-button" type="button" value="Next" />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="add-item-form">
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default Tablecomp;
