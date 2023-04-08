import React, { useEffect, useState } from "react"
import ShopCart from "./ShopCart";

function MyButton() {
  const [buttonText, setButtonText] = useState('Click me!');

  const handleClick = () => {
    setButtonText('Clicked!');
  };

  return (
    <button onClick={handleClick}>
      
    </button>
  );
}

function CreateItem() {
    const [isSaving, setIsSaving] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
  
    const handleSaveItem = async (item) => {
      setIsSaving(true);
      setErrorMessage(null);
  
      try {
        const response = await fetch('/api/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        });
  
        if (!response.ok) {
          throw new Error('Failed to save item.');
        }
  
        setIsSaving(false);
        window.location.href = '/items';
      } catch (error) {
        setIsSaving(false);
        setErrorMessage(error.message);
      }
    };
  
    return (
      <div>
        <h1>Create Item</h1>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <ShopCart isSaving={isSaving} onSubmit={handleSaveItem} />
      </div>
    );
  }

export default MyButton
