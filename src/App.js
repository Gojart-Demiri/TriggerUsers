import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import { MentionsInput, Mention } from 'react-mentions';
import{swapTags,getUsersFromTags} from './Components/tags';



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      value: '',
      singleLineValue: '',
      mentionData: null,
      users: [
        {
          _id: '1',
          name: { first: 'Jeremy', last: 'Bertin' }
        },
        {
          _id: '2',
          name: { first: 'Gojart', last: 'Demiri' }
        },
        {
          _id: '4',
          name: { first: 'Milivoje', last: 'Mili' }
        },
        {
          _id: '5',
          name: { first: 'Betina', last: 'Szgedi' }
        },
        {
          _id: '6',
          name: { first: 'Eri', last: 'Nagy' }
        },
        {
          _id: '7',
          name: { first: 'Lea', last: 'Saronja' }
        },
        {
          _id: '8',
          name: { first: 'Vanessa', last: 'Assenav' }
        },
        {
          _id: '9',
          name: { first: 'Eva', last: 'Zajaczkowska' }
        },
        {
          _id: '10',
          name: { first: 'Anamaria', last: 'Luga' }
        },
        {
          _id: '11',
          name: { first: 'Katalina', last: 'Onu' }
        },
        {
          _id: '12',
          name: { first: 'Hadar', last: 'Acobas' }
        },
        {
          _id: '13',
          name: { first: 'Sony-Ericsson', last: 'Experia' }
        },
        {
          _id: '14',
          name: { first: 'Teofil', last: 'Vartolomei' }
        },
        {
          _id: '15',
          name: { first: 'Markus', last: 'Doppelreiter' }
        },
        {
          _id: '16',
          name: { first: 'Aleksandar', last: 'Devic' }
        },
        {
          _id: '17',
          name: { first: 'Louis', last: 'Perner' }
        },
        {
          _id: '18',
          name: { first: 'Ruba', last: 'Isa' }
        },
        {
          _id: '19',
          name: { first: 'Balind', last: 'Bakos' }
        },
        {
          _id: '20',
          name: { first: 'Ryan', last: 'Williams' }
        }
      ]
    };
  }

  handleChange = (event, newValue, newPlainTextValue, mentions) => {
    console.log(newValue, newPlainTextValue, mentions)
    this.setState({
      value: newValue,
      mentionData: {newValue, newPlainTextValue, mentions}
    })
  }

  handleChangeSingle = (e, newValue) => {
    this.setState({
      singleLineValue: newValue
    })
  }

  render() {
    const userMentionData = this.state.users.map(myUser => ({
      id: myUser._id,
      display: `${myUser.name.first} ${myUser.name.last}`
    }))
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
        <MentionsInput
          value={this.state.value}
          onChange={this.handleChange}
          markup="@{{__type__||__id__||__display__}}"
          placeholder="Type anything"
          className="mentions"
        >
          <Mention
            type="user"
            
            trigger="@ " 
            data={userMentionData}
            className="mentions__mention"
          />
        </MentionsInput>
  
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
