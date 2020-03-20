import React, {Component} from 'react';
import Info_me from "./components/info_me";
import './App.css';

const me = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '신준현',
    'birthday' : '940919',
    'gender' : '남자',
    'job' : '프로그래머'
  },
]

class App extends Component {
  render() {
    return (
      <div>
        {
          me.map(i => {
            return (
            <Info_me
              key = {i.id}
              id = {i.id}
              image = {i.image}
              name = {i.name}
              birthday = {i.birthday}
              gender = {i.gender}
              job = {i.job}
            />
            )
          })
        }
      </div>
    );
  }
}

export default App;
