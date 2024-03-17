import React, { useState, useRef } from 'react';
import MenuIcon from '../images/icon50.png';
import '../css/App.css';
import Content from '../pages/content';
import MainContent from '../pages/main_content'

export default function ExampleCss() {
  const [content, setContent] = useState(
    <div>
      {<MainContent />}
    </div>
  );
  const wrapperRef = useRef();

  const handleClick = () => {
    const wrapper = wrapperRef.current;
    wrapper.classList.toggle('is-nav-open');
  };

  const updateContent = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className="main">
      <div ref={wrapperRef} className="wrapper">
        <div className="nav">
          <img
            src={MenuIcon}
            alt="Menu Icon"
            className="nav_icon"
            onClick={handleClick}
          />
          <div className="nav_body">
            <Content updateContent={updateContent} />
          </div>
        </div>
      </div>

      <div className="content"> 
        <h1>Container 1</h1>
        <div id="container1">{content}</div>
      </div>
    </div>
  );
}
