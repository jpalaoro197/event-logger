import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewEventForm(props){

  function handleNewEventFormSubmission(event) {
    event.preventDefault();
    props.onNewEventCreation({
      affair: event.target.affair.value, 
      location: event.target.location.value, 
      notes: event.target.notes.value, 
      visits: event.target.visits.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewEventFormSubmission}>
        <input
          type='text'
          name='affair'
          placeholder='affair' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='notes'
          placeholder='notes.' />
        <button type='submit'>big time events, lets gooo!</button>
      </form>
    </React.Fragment>
  );
  NewEventForm.propTypes = {
    onNewEventCreation: PropTypes.func
}
}

export default NewEventForm;