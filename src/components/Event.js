import React from "react";
import PropTypes from "prop-types";

function Event(props){
  return (
    <React.Fragment>
      <h3>{props.location} - {props.affair}</h3>
      <p><em>{props.notes}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Event.propTypes = {
  affair: PropTypes.string,
  location: PropTypes.string,
  notes: PropTypes.string,
  visits: PropTypes.number
};

export default Event;