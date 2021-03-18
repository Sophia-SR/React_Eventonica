import React, {useState} from 'react'

const EventForm = () => {
    const [event, setEvent] = useState([]);
    const [eventDate, setEventDate] = useState([]);
    const [eventTime, setEventTime] = useState([]);
    const [eventLoc, setEventLoc] = useState([]);

    return (
      <>
        <form
        onSubmit={(e) => {
          e.preventDefault();
          let newEvent = ({ event, eventDate, eventTime, eventLoc});
          console.log(newEvent);
          return newEvent;
        }}
          >
          <div>
            <label>
              Event Name:
              <input
                name="event-name"
                type="text"
                value={event}
                onChange={(e) => {
                  console.log(event);
                  setEvent(e.target.value);
                }}
              ></input>
            </label>
            <br />
            <label>
              Event Date
              <input
                name="event-date"
                type="date"
                required
                value={eventDate}
                onChange={(e) => {
                  console.log(eventDate);
                  setEventDate(e.target.value);
                }}
              ></input>
            </label>
            <br />
            <label>
              Event Time:
              <input
                name="event-time"
                type="text"
                required
                value={eventTime}
                onChange={(e) => {
                  console.log(eventTime);
                  setEventTime(e.target.value);
                }}
              ></input>
            </label>
            <br />
            <label>
              Event Location:
              <input
                name="event-location"
                type="text"
                required
                value={eventLoc}
                onChange={(e) => {
                  console.log(eventLoc);
                  setEventLoc(e.target.value);
                }}
              ></input>
            </label>
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
        {}
      </>
    );
  };
  

export default EventForm
