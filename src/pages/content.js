import React from 'react';
import '../css/content.css';
import DataSearch from '../pages/data_search.js';
import ToDoList from '../pages/to_do_list.js';
import Profile from '../pages/profile.js';
import MainContent from './main_content.js';

function Content({ updateContent }) {
  const handleButtonClick = (newContent) => {
    updateContent(newContent);
  };

  return (
    <div>
      {/* Buttons to change the content */}
      <div className="button-container">

        <button className="button" onClick={() => handleButtonClick(
          <div>
            {<MainContent />}
          </div>
        )}>
          HomePage
        </button>

        <button className="button" onClick={() => handleButtonClick(
          <div>
            {<Profile />}
          </div>
        )}>
          Profile
        </button>

        <button className="button" onClick={() => handleButtonClick(
          <div>
            {<ToDoList />}
          </div>
        )}>
          To Do List
        </button>


        <button className="button" onClick={() => handleButtonClick(
          <div>
            {<DataSearch />}
          </div>
        )}>
          Data Search
        </button>


        <button className="button" onClick={() => handleButtonClick(
          <div>
            <p>This is the content for Yhteystiedot.</p>
          </div>
        )}>
          Contacts
        </button>

      </div>
    </div>
  );
}

export default Content;
