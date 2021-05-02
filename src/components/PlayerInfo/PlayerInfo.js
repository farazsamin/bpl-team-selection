import React from 'react';
import './PlayerInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const PlayerInfo = (props) => {
    const { name, nationalTeam, salary, img } = props.player;
    return (
        
            <div className="card col-md-3 mb-2">
            <img className="card-img-top" src={img} alt="Player"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">From : {nationalTeam}</p>
                    <p className="card-text">Monthly Salary :  $ {salary}</p>
                    <button onClick={() => props.handleAddPlayer(props.player)} className="btn btn-primary"> <FontAwesomeIcon icon={faPlus} /> Add This Player</button>
                   
                </div>
            </div>
       
        
            
    );
};

export default PlayerInfo;