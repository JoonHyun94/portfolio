import React from 'react';

class Header extends React.Component {
    // style = {
    //     display : 'none'
    // }

    // // header close
    // closeOnclick = () => {
    //     console.log(this.style);
    //     this.state
    // }
    // // header close

    render() {
        return (
            <div class = "header">
                <ul class = "menu">
                    <div id = "close"></div>
                    <li><a href = "#main">Home</a></li>
                    <li><a href = "#me">About</a></li>
                    <li><a href = "#project">Project</a></li>
                    <li><a href = "#contact_me">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Header;