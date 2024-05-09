import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';

function App() {
  const [army, setArmy] = useState([]);

  const handleEnlistment = (id) => {
    fetch(`http://localhost:3001/bots/${id}`)
      .then(response => response.json())
      .then(data => {
        if (!army.some(b => b.id === id)) {
          setArmy([...army, data]);
        }
      });
  };

  const handleRelease = (id) => {
    setArmy(army.filter(bot => bot.id !== id));
  };

  const handleDischarge = (id) => {
    fetch(`http://localhost:3001/bots/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        setArmy(army.filter(bot => bot.id !== id));
      } else {
        console.error('Failed to discharge bot');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BotCollection handleEnlistment={handleEnlistment} />} />
        <Route path="/your-bot-army" element={<YourBotArmy army={army} handleRelease={handleRelease} handleDischarge={handleDischarge} />} />
        <Route path="/bot-specs/:id" element={<BotSpecs />} />
      </Routes>
    </Router>
  );
}

export default App;












