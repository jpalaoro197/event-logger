import React from 'react';
import NewEventForm from './NewEventForm';
import EventList from './EventList';

  class EventControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false ,
        mainEventList: [] ,
      };
      this.handleClick = this.handleClick.bind(this); //new code here
    }
    handleAddingNewEventToList = (newEvent) => {
      const newMainEventList = this.state.mainEventList.concat(newEvent);
      this.setState({mainEventList: newMainEventList,
                    formVisibleOnPage: false });
      }
    handleClick() {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }


  
    render(){
      let currentlyVisibleState = null;
      let buttonText = null; // new code
      if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewEventForm onNewEventCreation={this.handleAddingNewEventToList}/>;
        buttonText = "Return to Event List"; // new code
      } else {
        currentlyVisibleState = <EventList eventList ={this.state.mainEventList} />;
        buttonText = "Add Event"; // new code
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
        </React.Fragment>
      );
    }
  }

export default EventControl;