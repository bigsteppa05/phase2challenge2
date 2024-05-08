import React from 'react';
import { Link } from 'react-router-dom';

function BotCollection({ bots, selectedClasses, toggleSelectedClass }) {
  // Function to check if bot class is selected for filtering
  const isClassSelected = (botClass) => selectedClasses.includes(botClass);

  // Filter bots based on selected classes
  const filteredBots = bots.filter(bot => selectedClasses.length === 0 || isClassSelected(bot.bot_class));

  return (
    <div>
      <h2>Bot Collection</h2>
      <div>
        {filteredBots.map(bot => (
          <div key={bot.id}>
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <Link to={`/bots/${bot.id}`}>View Details</Link> {/* Adjust the URL */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
