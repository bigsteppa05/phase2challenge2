import React from 'react';
import Bot from './Bott.js';
import styles from './BotCollection.module.css';

function BotCollection({ bots, onAddToArmy }) {
 return (
    <div className={styles.botCollection}>
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onAddToArmy={onAddToArmy} />
      ))}
    </div>
 );
}

export default BotCollection;