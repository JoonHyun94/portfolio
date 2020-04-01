import React from 'react';
import styled, { keyframes } from 'styled-components';
import { generateMedia} from 'styled-media-query';

// 반응형 웹
const customMedia = generateMedia({
    maxmobile: '575px',
    minmobile: '352px',
});

const movingRight = keyframes`
    from { margin-left: 0%; }
    to { margin-left: 90%; }
`
const movingLeft = keyframes`
    from { margin-left: 100%; }
    to { margin-left: 0%; }
`

var Headermenu = styled.div`
    position: fixed;
    width: 100%;
    height: auto;
    background-color: rgba(255, 255, 255, 0);
    z-index :9999
`
const Menu = styled.ul`
    float: right;
    margin: 0;
    padding: 0;
    width: auto;
    height: auto;
    border-radius: 0 0 0 1.5vw;
    opacity: 0.5;
    background-color: black;
    ${customMedia.lessThan('maxmobile')`
        width: 100%;
        border-radius: 0 0 1.5vw 1.5vw;
    `}
`

const Menuli = styled.li`
    text-align: center;
    list-style:none; /* 블릿 삭제 */
    float: left;
    margin: 2.5vw;
    font-family: JejuGothic;
    font-size: 1vw;
    ${customMedia.lessThan('maxmobile')`
        margin: 2.5vw;
        list-style:none; /* 블릿 삭제 */
        float: right;
        font-size: 3vw;
    `}
`
const Close = styled.div`
    ${customMedia.lessThan('maxmobile')`
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            margin-top: 4vw;
            margin-left: 5vw;
            height: 3vw;
            border: solid white;
            border-width: 0 0.7vw 0.7vw 0;
            transform: rotate(45deg);
        }
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            margin-top: 4vw;
            margin-left: 5vw;
            height: 3vw;
            border: solid white;
            border-width: 0 0.7vw 0.7vw 0;
            transform: rotate(-45deg);
        }
    `}

`
const Open = styled.div`
    ${customMedia.lessThan('maxmobile')`
        float: right;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 2vw;
        margin-left: 5vw;
        height: 3vw;
        border: solid white;
        border-width: 0.5vw 0.5vw 0.5vw 0;
        transform: rotate(90deg);
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            margin-top: -0.5vw;
            margin-left: 1.3vw;
            height: 3vw;
            border: solid white;
            border-width: 0.5vw 0.5vw 0.5vw 0;
            transform: rotate(180deg);
        }
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            margin-top: -0.5vw;
            margin-left: 2.6vw;
            height: 3vw;
            border: solid white;
            border-width: 0.5vw 0.5vw 0.5vw 0;
            transform: rotate(180deg);
        }
    `}
`
const Anchor = styled(Menuli.withComponent("a"))`
        margin: 0 auto;
`

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: true
        };
    }

    closeMenu = () => {
        console.log("sss");
        Headermenu = styled.div`
            position: fixed;
            width: 100%;
            height: auto;
            background-color: rgba(255, 255, 255, 0);
            animation: ${movingRight} 1s;
            margin-left: 90%;
            z-index :9999
        `
        this.setState({
            clicked: false,

        });
    }
    openMenu = () => {
        console.log("ddd");
        Headermenu = styled.div`
            position: fixed;
            width: 100%;
            height: auto;
            background-color: rgba(255, 255, 255, 0);
            animation: ${movingLeft} 1s;
            z-index :9999
        `
        this.setState({
            clicked: true
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.clicked ? <Headermenu>
                    <Menu>
                        <Close onClick={this.closeMenu}/>
                        <Menuli><Anchor href = "#Maindisplay">Home</Anchor></Menuli>
                        <Menuli><Anchor href = "#Me">About</Anchor></Menuli>
                        <Menuli><Anchor href = "#Projectdisplay">Project</Anchor></Menuli>
                        <Menuli><Anchor href = "#Contactdisplay">Contact</Anchor></Menuli>
                    </Menu>
                    </Headermenu> : 
                    <Headermenu>
                        <Menu>
                            <Menuli><Anchor href = "#Maindisplay">Home</Anchor></Menuli>
                            <Menuli><Anchor href = "#Me">About</Anchor></Menuli>
                            <Menuli><Anchor href = "#Projectdisplay">Project</Anchor></Menuli>
                            <Menuli><Anchor href = "#Contactdisplay">Contact</Anchor></Menuli>
                            <Open onClick={this.openMenu}/>
                        </Menu>
                    </Headermenu>
                }
            </div>
        )
    }
}


export default Header;