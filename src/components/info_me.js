import React from 'react';

class Info_me extends React.Component {
    render() {
        return (
            <div>
                <Me_Profile id = {this.props.id} image = {this.props.image} name = {this.props.name}/>
                <Me_Info birthday = {this.props.birthday} gender = {this.props.gender} job = {this.props.job}/>
            </div>
        )
    }
}

class Me_Profile extends React.Component {
    render() {
        return (
            <div>
                <img src = {this.props.image} alt = "profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class Me_Info extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Info_me;