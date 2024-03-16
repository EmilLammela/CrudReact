import React from 'react';
import kuva1 from '../images/man.jpg';
import '../css/content.css';

function Content({ updateContent }) {
  const handleButtonClick = (newContent) => {
    updateContent(newContent);
  };

  return (
    <div>
      {/* Buttons to change the content */}
      <div className="button-container">
        <button className="button" onClick={() => handleButtonClick(
          <div className="sisaltoDiv">
            <div className="tekstiDiv">
              <p>
                Henkilö X
              </p>
            </div>
            <div className="kuvaDiv">
              <img
                className="kuva1"
                src={kuva1}
                alt="Henkilö X"
              />
            </div>
          </div>
        )}>
          Meistä
        </button>

        <button className="button" onClick={() => handleButtonClick(
          <div>
            <p>This is the content for Yhteystiedot.</p>
          </div>
        )}>
          Yhteystiedot
        </button>

        <button className="button" onClick={() => handleButtonClick(
          <div>
            <p>Main contect.</p>
          </div>
        )}>
          Etusivu
        </button>

      </div>
    </div>
  );
}

export default Content;
