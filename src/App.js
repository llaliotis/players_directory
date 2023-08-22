import React, { useState } from 'react';
import './App.css';
import ContactPopup from './ContactPopup';

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showTeamForm, setShowTeamForm] = useState(false);

  const handleAddPlayersClick = () => {
    setShowAddForm(true);
    setShowTeamForm(false);
    setShowContactPopup(false);
  };

  const handleAddEditTeamClick = () => {
    setShowTeamForm(true);
    setShowAddForm(false);
    setShowContactPopup(false);
  };

  const handleBackClick = () => {
    setShowAddForm(false);
    setShowTeamForm(false);
  };

  const handleContactClick = () => {
    setShowContactPopup(true);
  };

  const handleCloseContactPopup = () => {
    setShowContactPopup(false);
  };

  return (
    <div className="app-container">
      <header>
        <div className="title-container">
          <h1>🏀 ESKA(NA) Men's Basketball Directory 🏀 (beta)</h1>
          <p className="title-description">
          📦 Welcome to the world's first local basketball players directory!
            <p>🔍 Click on each player to view details.</p>⛹️‍♂️ If you want to add a player in the database,
            click the "Add Player" button on the right.
            <p>🏀 If you want to add or edit a team, click on the "Add/edit team" button on the right.</p>
            <p>❓ If you have any questions, click the "Contact" button on the top right.</p>
          </p>
        </div>
        {/* New "Contact" button in the header */}
        <button className="contact-button" onClick={handleContactClick}>
        📩 Contact
        </button>
      </header>
      <div className="buttons-container">
        {showAddForm || showTeamForm ? (
          <button className="back-button" onClick={handleBackClick}>
           ⬅️ Back
          </button>
        ) : (
          <>
            <button className="add-players-button" onClick={handleAddPlayersClick}>
            ⛹️‍♂️ Add Players
            </button>
            <button className="add-players-button" onClick={handleAddEditTeamClick}>
            🏀 Add/Edit Team
            </button>
          </>
        )}
      </div>
      <main>
        {showAddForm ? (
          <iframe
            src="https://airtable.com/embed/appThwwv8stVXpfrq/shrODyeVL0HL6pqPb?backgroundColor=purple"
            title="Add Players Form"
            width="100%"
            height="600"
          />
        ) : showTeamForm ? (
          <iframe
            src="https://airtable.com/embed/appThwwv8stVXpfrq/shrD10KYq2hkjUKym?backgroundColor=purple"
            title="Add/Edit Team Form"
            width="100%"
            height="600"
          />
        ) : (
          <div>
            <iframe
              src="https://airtable.com/embed/appThwwv8stVXpfrq/shrn2FCFyeL1R6BVK?backgroundColor=purple"
              title="Basketball Players Table"
              width="100%"
              height="600"
            />
          </div>
        )}
      </main>
      <footer>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </footer>
      {showContactPopup && <ContactPopup onClose={handleCloseContactPopup} />}
    </div>
  );
}

export default App;
