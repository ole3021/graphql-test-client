import React from 'react';

import dayjs from 'dayjs';
import { Mutation } from 'react-apollo';
import { DateInput } from '@progress/kendo-react-dateinputs';

import { CREATE_RESERVATION } from '../queries';
import ErrorNotify from './ErrorNotify';

const initState = {
  guestName: '',
  hotelName: '',
  arrivalAt: null,
  departureAt: null
};

const customFormatPlaceholder = {
  year: 'YYYY',
  month: 'MM',
  day: 'DD',
  hour: 'H',
  minute: 'M'
};

const startDate = dayjs().toDate();
const endDate = dayjs()
  .add(1, 'year')
  .toDate();

class ReservateForm extends React.Component {
  state = {
    ...initState
  };

  clearState = () => {
    this.setState({ ...initState });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event, createReservation) => {
    event.preventDefault();

    await createReservation();

    this.clearState();
  };

  render() {
    const { guestName, hotelName, arrivalAt, departureAt } = this.state;
    return (
      <Mutation
        mutation={CREATE_RESERVATION}
        variables={{ data: { guestName, hotelName, arrivalAt, departureAt } }}
      >
        {(createReservation, { data, loading, error }) => {
          return (
            <form
              className="box"
              onSubmit={event => this.handleSubmit(event, createReservation)}
            >
              <div className="nes-field is-inline">
                <label htmlFor="guestName">GuestName</label>
                <input
                  required
                  type="text"
                  id="guestName"
                  name="guestName"
                  value={guestName}
                  className="nes-input"
                  onChange={this.handleChange}
                />
              </div>
              <div className="nes-field is-inline">
                <label htmlFor="hotelName">HotelName</label>
                <input
                  type="text"
                  id="hotelName"
                  name="hotelName"
                  value={hotelName}
                  className="nes-input"
                  onChange={this.handleChange}
                />
              </div>
              <div className="nes-field is-inline">
                <label htmlFor="arrivalAt">ArrivalAt</label>
                <DateInput
                  required
                  spinners={true}
                  format="yyyy/MM/dd HH:mm"
                  formatPlaceholder={customFormatPlaceholder}
                  min={startDate}
                  max={endDate}
                  id="arrivalAt"
                  name="arrivalAt"
                  className="nes-input"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <div className="nes-field is-inline">
                <label htmlFor="departureAt">DepartureAt</label>
                <DateInput
                  required
                  spinners={true}
                  format="yyyy/MM/dd HH:mm"
                  formatPlaceholder={customFormatPlaceholder}
                  min={startDate}
                  max={endDate}
                  id="departureAt"
                  name="departureAt"
                  className="nes-input"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="nes-btn is-success">
                Submit
              </button>
              {error && <ErrorNotify error={error} />}
              {data && (
                <div className="nes-container is-rounded">
                  <span className="nes-text is-success">Success!</span>
                </div>
              )}
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default ReservateForm;
