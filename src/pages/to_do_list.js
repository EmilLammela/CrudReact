import React from 'react';
import '../css/to_do_list.css';
//import firebase from '../firebaseConfig';

const ToDoList = () => {
    const allowDrop = (ev) => {
        ev.preventDefault();
    };

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    };

    const drop = (ev) => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    };

    return (
        <div className="content_container">
            <div className="box" id="left" onDrop={drop} onDragOver={allowDrop}>
                <div id="drag1" draggable="true" onDragStart={drag}>
                <p>Draggable and Droppable</p>
                </div>
            </div>

            <div className="box" id="div" onDrop={drop} onDragOver={allowDrop}></div>
            <div className="box" id="div" onDrop={drop} onDragOver={allowDrop}></div>
            <div className="box" id="div" onDrop={drop} onDragOver={allowDrop}></div>
            <div className="box" id="div" onDrop={drop} onDragOver={allowDrop}></div>
            
            <div className="box" id="right" onDrop={drop} onDragOver={allowDrop}>
            </div>

      </div>
    );
};


export default ToDoList;
