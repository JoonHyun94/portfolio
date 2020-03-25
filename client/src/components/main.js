import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div class = "main">
               <h1 class = "main_title">{this.props.main_title}</h1>
            </div>
        )
    }
}

export default Main;