import React from 'react';

class Contact_me extends React.Component {
    render() {
        return (
            <div class = "contact_me">
                <div class = "index">{this.props.index}</div>
                <div class = "contact_title"><h1 class = "contact_h1">{this.props.contact_title}</h1></div>
                
                <div class = "contact_body">
                    <div class = "contact_content">
                        <div class = "contact_detail">
                            <h1 class = "contact_name">{this.props.contact_name}</h1>
                            <div class = "contact_email">{this.props.contact_email}</div>
                            <div class = "contact_phone">{this.props.contact_phone}</div>
                        </div>
                        <div class = "contact_img"><img class = "contact_detail_img" src = {this.props.contact_img} alt = "profile"/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact_me;