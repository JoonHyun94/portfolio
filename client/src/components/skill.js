import React from 'react';

class Skill extends React.Component {
    render() {
        return (
            <div class = "skill">
               <div class = "index">{this.props.index}</div>
               <h1 class = "skill_title">{this.props.skillTitle}</h1>
            </div>
        )
    }
}

export default Skill;