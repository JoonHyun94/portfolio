import React from 'react';

class Info_me extends React.Component {
    render() {
        return (
            <div class = "me">
                <div class = "index">{this.props.index}</div>
                <div class = "info_me">
                    <img class = "id_photo" src = {this.props.image} alt = "profile"/><br></br><br></br>
                    <div class = "name"><b>{this.props.name}</b><br></br><br></br><br></br><br></br></div>
                    <div class = "info">{this.props.about}</div>
                </div>
                <div class = "about_me">
                    <div class = "about_title">About Me</div>
                    <div class = "about_content">{this.props.aboutContent}</div>
                </div>
            </div>
        )
    }
}

export default Info_me;