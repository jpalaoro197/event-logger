import React from "react";
import Event from "./Event";
import PropTypes from "prop-types";


function EventList(props) { // Add props as parameter.
  return (
    <React.Fragment>
      <hr />
      {props.eventList.map((event, index) => // Loop through the list passed down from EventControl.
        <Event affair={event.affair}
          location={event.location}
          notes={event.notes}
          visits={event.visits}
          key={index} />
      )}
    </React.Fragment>
  );
}

// Add propTypes for eventList.
EventList.propTypes = {
  eventList: PropTypes.array
};

export default EventList;