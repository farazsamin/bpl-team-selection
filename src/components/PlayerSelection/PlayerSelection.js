import React from 'react';

const PlayerSelection = (props) => {
    const team = props.team;
    const totalBudget = team.reduce((total,player) => total + player.salary, 0 );
    return (
        <div className="text-center">
            <h3 className="text-success mb-4">Team  Summary</h3>
            <h5 className="text-info">Players Selected : {props.team.length}</h5>
            <h5 className="text-info mb-3">Total Budget $ : {totalBudget}</h5>
            
        </div>
    );
};

export default PlayerSelection;