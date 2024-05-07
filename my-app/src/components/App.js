import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';
import { botsData } from './botsData'; // assuming you have a mock data file

function App() {
  const [bots, setBots] = useState(botsData);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);

  // Function to add a bot to YourBotArmy
  const enlistBot = (bot) => {
    if (!yourBotArmy.some(b => b.bot_class === bot.bot_class)) {
      setYourBotArmy([...yourBotArmy, bot]);
      setBots(bots.filter(b => b.id !== bot.id));
    }
  };

  // Function to remove a bot from YourBotArmy
  const releaseBot = (bot) => {
    setYourBotArmy(yourBotArmy.filter(b => b.id !== bot.id));
    setBots([...bots, bot]);
  };

  // Function to toggle selected classes for filtering
  const toggleSelectedClass = (botClass) => {
    if (selectedClasses.includes(botClass)) {
      setSelectedClasses(selectedClasses.filter(c => c !== botClass));
    } else {
      setSelectedClasses([...selectedClasses, botClass]);
    }
  };

  return (
    <div>
      <YourBotArmy yourBotArmy={yourBotArmy} onRelease={releaseBot} />
      <SortBar />
      <BotCollection 
        bots={bots} 
        onEnlist={enlistBot} 
        selectedClasses={selectedClasses}
        toggleSelectedClass={toggleSelectedClass}
      />
    </div>
  );
}

export default App;

