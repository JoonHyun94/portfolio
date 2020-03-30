import React from 'react';

class Info_me extends React.Component {
    render() {
        return (
            <div id = "me">
                <div class = "index">{this.props.index}</div>

                <div class = "info_me">
                    <div class = "id_img"><img class = "id_photo" src = {this.props.image} alt = "profile"/></div>
                    <div class = "info_me_child">
                        <div class = "name"><b>{this.props.name}</b></div>
                        <div class = "info">{this.props.about}</div>
                    </div>
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