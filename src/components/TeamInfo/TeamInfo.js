import React from 'react';

const TeamInfo = (props) => {
    const { name, salary} = props.member;
    return (
        <div className="card mt-2">
            <div className="card-body text-center">
                <h5 className="card-title">Name : {name}</h5>
                <p className="card-text">Monthly Salary $: {salary}</p>
            </div>
        </div>

    );
};

export default TeamInfo;