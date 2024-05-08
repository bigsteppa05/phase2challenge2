import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';
import BotSpecs from './BotSpecs';

function App() {
  // Mock bot data
  const [bots, setBots] = useState([
    { id: 1, name: "Bot 1", bot_class: "Assault", health: 100, damage: 50, armor: 20 },
    { id: 2, name: "Bot 2", bot_class: "Medic", health: 80, damage: 20, armor: 30 },
    // Add more bot objects as needed
  ]);

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

  // Function to fetch bot details by ID
  const getBotById = (botId) => {
    return bots.find(bot => bot.id === parseInt(botId));
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <YourBotArmy yourBotArmy={yourBotArmy} onRelease={releaseBot} />
            <SortBar />
            <BotCollection 
              bots={bots} 
              onEnlist={enlistBot} 
              selectedClasses={selectedClasses}
              toggleSelectedClass={toggleSelectedClass}
            />
          </Route>
          <Route path="/bots/:botId">
            {({ match }) => {
              const botId = match.params.botId;
              const bot = getBotById(botId); // Fetch bot details by ID
              return <BotSpecs bot={bot} onEnlist={enlistBot} />;
            }}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



