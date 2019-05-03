import React from 'react';

import dayjs from 'dayjs';
import { Query, ApolloConsumer } from 'react-apollo';
import { FETCH_RESERVATION } from '../queries';
import ErrorNotify from './ErrorNotify';

const initState = {
  id: '',
  error: null,
  data: null
};

class FetchReservation extends React.Component {
  state = { ...initState };

  clearState = () => {
    this.setState({ ...initState });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event, client) => {
    event.preventDefault();

    const { data, error, loading } = await client.query({
      query: FETCH_RESERVATION,
      variables: { id: this.state.id }
    });

    this.setState({ data, error });

    this.setState({ id: '' });
  };

  render() {
    const { id, error, data } = this.state;
    return (
      <ApolloConsumer>
        {client => {
          return (
            <form
              className="box"
              onSubmit={event => this.handleSubmit(event, client)}
            >
              <div className="nes-field is-inline">
                <label htmlFor="guestName">ID</label>
                <input
                  required
                  type="text"
                  id="id"
                  name="id"
                  value={id}
                  className="nes-input"
                  onChange={this.handleChange}
                />
                <button type="submit" className="nes-btn is-success">
                  Fetch Info
                </button>
              </div>

              {error && <ErrorNotify error={error} />}
              {data && data.getReservation && (
                <div className="nes-container with-title ">
                  <p className="title">{data.getReservation.id}</p>
                  <div className="lists">
                    <ul className="nes-list is-disc">
                      <li>Name: {data.getReservation.guestName}</li>
                      <li>HotelName: {data.getReservation.hotelName}</li>
                      <li>
                        ArrivalAt:
                        {dayjs(data.getReservation.arrivalAt).format(
                          'YYYY-MM-DD HH:mm'
                        )}
                      </li>
                      <li>
                        DepartureAt:
                        {dayjs(data.getReservation.departureAt).format(
                          'YYYY-MM-DD HH:mm'
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </form>
          );
        }}
      </ApolloConsumer>
    );
  }
}

export default FetchReservation;
