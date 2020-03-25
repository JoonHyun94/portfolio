import React from 'react';

class Info_me extends React.Component {
    render() {
        return (
            <div class = "me">
                <div class = "info_me">
                    <div><img class = "id_photo" src = {this.props.image} alt = "profile"/><br></br><br></br></div>
                    <div class = "name"><b>{this.props.name}</b><br></br><br></br><br></br><br></br><br></br></div>
                    <div class = "info">{this.props.about}<br></br><br></br></div>
                </div>
                <div class = "about_me">
                    <div class = "about">{this.props.index}</div>
                </div>
            </div>
        )
    }
}

export default Info_me;