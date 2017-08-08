import React from 'react';
import update from 'react-addons-update';

class App extends React.Component {
  render() {
    return (
      <Contact />
    );
  }
}

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        { name: 'Albert', phone: '010-0100-0001' },
        { name: 'Blbert', phone: '010-0100-0002' },
        { name: 'Clbert', phone: '010-0100-0004' },
        { name: 'Dlbert', phone: '010-0100-0003' },
      ],
      selectedKey: -1,
      selected: {
        name: "",
        phone: ""
      }
    }
  }

  _onSelect(key) {
    if(key == this.state.selectedKey) {
      console.log("key select cancelled");
      this.setState({
        selectedKey: -1,
        selected: {
          name: "",
          phone: ""
        }
      });
      return;
    }

    this.setState({
      selectedKey: key,
      selected: this.state.contactData[key]
    });
    console.log(key + " is selected");
  }

  _isSelected(key) {
    if(this.state.selectedKey == key) {
      return true;
    } else {
      return false;
    }
  }

  _insertContact(name, phone) {
    let newState = update(this.state, {
      contactData: {
        $push: [{"name":name, "phone":phone}]
      }
    })
    this.setState(newState);
  }

  _removeContact() {
    if(this.state.selectedKey == -1) {
      console.log("contact not selected");
      return;
    }

    this.setState({
      contactData: update(this.state.contactData, {
        $splice: [[this.state.selected - 1, 1]]
      }),
      selectedKey: -1
    })
  }

  _editContact(name, phone) {
    this.setState({
      contactData: update(this.state.contactData, {
        [this.state.selectedKey]: {
          name: { $set: name },
          phone: { $set: phone }
        }
      }),
      selected: {
        name: name,
        phone: phone
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          { this.state.contactData.map((contact, i) => {
            return (
              <ContactInfo name={ contact.name }
                          phone={ contact.phone }
                            key={ i }
                     contactKey={ i }
                     isSelected={ this._isSelected.bind(this)(i) }
                       onSelect={ this._onSelect.bind(this) }>
              </ContactInfo>
            );
          }) }
        </ul>
        <ContactCreator onInsert={ this._insertContact.bind(this) }/>
        <ContactRemover onRemove={ this._removeContact.bind(this) }/>
        <ContactEditor onEdit={ this._editContact.bind(this) }
                   isSelected={ this.state.selectedKey != -1 }
                      contact={ this.state.selected }/>
      </div>
    );
  }
}

class ContactRemover extends React.Component {
  handleClick() {
    this.props.onRemove();
  }

  render() {
    return (
      <button onClick={ this.handleClick.bind(this) }>
        Remove selected contact
      </button>
    );
  }
}

class ContactInfo extends React.Component {

  handleClick() {
    this.props.onSelect(this.props.contactKey);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (JSON.stringify(nextProps) != JSON.stringify(this.props));
  }

  render() {

    let getStyle = (isSelected) => {
      if(!isSelected){
        return;
      }

      let style = {
        fontWeight: 'bold',
        backgroundColor: '#4efcd8'
      };

      return style;
    }

    return (
      <li style={ getStyle(this.props.isSelected) }
        onClick={ this.handleClick.bind(this) }>
        { this.props.name } { this.props.phone }
      </li>
    );
  }
}

class ContactCreator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    }
  }

  handleClick() {
    this.props.onInsert(this.state.name, this.state.phone);
    this.setState({
      name: "",
      phone: ""
    })
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    return (
      <div>
        <p>
          <input type="text" name="name" placeholder="name" value={ this.state.name }
          onChange={ this.handleChange.bind(this) }/>
          <input type="text" name="phone" placeholder="phone" value={ this.state.phone }
          onChange={ this.handleChange.bind(this) }/>
          <button onClick={ this.handleClick.bind(this) }>Insert</button>
        </p>
      </div>
    );
  }
}

class ContactEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    }
  }

  handleClick() {
    if(!this.props.isSelected) {
      console.log("contact not selected");
      return;
    }

    this.props.onEdit(this.state.name, this.state.phone);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        name: nextProps.contact.name,
        phone: nextProps.contact.phone
      })
  }

  render() {
    return (
      <div>
        <p>
          <input type="text"
                 name="name"
          placeholder="name"
                value={ this.state.name }
             onChange={ this.handleChange.bind(this) }/>
          <input type="text"
                 name="phone"
          placeholder="phone"
                value={ this.state.phone }
             onChange={ this.handleChange.bind(this) }/>
          <button onClick={ this.handleClick.bind(this) }>
            Edit
          </button>
        </p>
      </div>
    );
  }
}


export default App;
