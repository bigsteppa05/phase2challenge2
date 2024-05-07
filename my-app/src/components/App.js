import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css';
function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch bots');
        }
        return response.json();
      })
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);
  

  const addToArmy = (bot) => {
    if (!yourBotArmy.includes(bot)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    const updatedArmy = yourBotArmy.filter((b) => b.id !== bot.id);
    setYourBotArmy(updatedArmy);
  };

  return (
    <div>
      <YourBotArmy yourBotArmy={yourBotArmy} onRelease={releaseBot} />
      <BotCollection bots={bots} onAddToArmy={addToArmy} yourBotArmy={yourBotArmy} />
    </div>
  );
}

export default App;
