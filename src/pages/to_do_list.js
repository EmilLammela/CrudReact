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
        
        <div>
            <div className="labels">
                <div className="label">left</div>
                <div className="label">Label 1</div>
                <div className="label">Label 2</div>
                <div className="label">Label 3</div>
                <div className="label">right</div>
            </div>
        
            <div className="content_container">
                <div className="box" id="left" onDrop={drop} onDragOver={allowDrop}>
                    <div id="drag1" draggable="true" onDragStart={drag}>
                    <p>Draggable and Droppable</p>
                    </div>
                </div>
        
                <div className="box" id="div1" onDrop={drop} onDragOver={allowDrop}></div>
                <div className="box" id="div2" onDrop={drop} onDragOver={allowDrop}></div>
                <div className="box" id="div3" onDrop={drop} onDragOver={allowDrop}></div>
            
                <div className="box" id="right" onDrop={drop} onDragOver={allowDrop}></div>
            </div>
        </div>
    );
};


export default ToDoList;
