import React from 'react';
import './SeasonDisplay.css'
const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burrr, it is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const test = ['test1', 'test2']

const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];


    // ****** This commented code is replaced by seasonConfig obj ******
    // const text = season === 'winter' ? 'Burrr, it is chilly' : 'Lest hit the beach'
    // const icon = season === 'winter' ? 'snowflake' : 'sun'

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;