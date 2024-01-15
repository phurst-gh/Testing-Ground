import React, { useState } from 'react';

const ListComponent = () => {
  // State to manage the list of entries
  const [entries, setEntries] = useState([]);
  // State to manage the input for adding/editing entries
  const [input, setInput] = useState('');
  // State to track the index of the entry being edited
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle adding/editing entries
  const handleSave = () => {
    if (input.trim() === '') return;

    // Check if we are editing an existing entry
    if (editIndex !== null) {
      const updatedEntries = [...entries];
      updatedEntries[editIndex] = input;
      setEntries(updatedEntries);
      setEditIndex(null);
    } else {
      // Add a new entry
      setEntries([...entries, input]);
    }

    // Clear the input field
    setInput('');
  };

  // Function to handle deleting an entry
  const handleDelete = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  // Function to handle editing an entry
  const handleEdit = (index) => {
    setInput(entries[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h2>List Component</h2>
      
      {/* Input for adding/editing entries */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add/Edit an entry"
      />
      <button onClick={handleSave}>{editIndex !== null ? 'Edit' : 'Add'}</button>

      {/* List of entries */}
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;