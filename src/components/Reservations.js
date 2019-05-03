import React from 'react';
import ReactPaginate from 'react-paginate';

import { Query } from 'react-apollo';
import { FETCH_RESERVATIONS, FETCH_RESERVATION } from '../queries';
import ErrorNotify from './ErrorNotify';

import dayjs from 'dayjs';

class Reservations extends React.Component {
  state = {
    limit: 10,
    skip: 0,
    selectedPage: 1
  };

  handlePageClick = paginConfig => {
    const { selected } = paginConfig;
    this.setState({
      skip: selected * this.state.limit || 0,
      selectedPage: selected
    });
  };

  render() {
    const { limit, skip, selectedPage } = this.state;

    return (
      <div>
        <div className="box">Reservations List</div>
        <div className="box">
          <Query
            query={FETCH_RESERVATIONS}
            variables={{ query: { limit, skip } }}
            fetchPolicy="cache-and-network"
          >
            {({ data, loading, error }) => {
              if (loading) return <div> Loading... </div>;

              if (error) {
                return <ErrorNotify error={error} />;
              } else {
                return (
                  <div className="nes-table-responsive">
                    <table className="nes-table is-bordered is-centered">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>GuestName</th>
                          <th>HotelName</th>
                          <th>ArrivalAt</th>
                          <th>DepartureAt</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.reservations.map((reservation, i) => (
                          <tr key={`${i}`}>
                            <td>{reservation.id}</td>
                            <td>{reservation.guestName}</td>
                            <td>{reservation.hotelName}</td>
                            <td>
                              {dayjs(reservation.arrivalAt).format(
                                'YYYY-MM-DD HH:mm'
                              )}
                            </td>
                            <td>
                              {dayjs(reservation.departureAt).format(
                                'YYYY-MM-DD HH:mm'
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="box">
                      <ReactPaginate
                        previousLabel={'prev'}
                        nextLabel={'next'}
                        pageCount={Math.round(data.totalReservations / limit)}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        initialPage={selectedPage}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                      />
                    </div>
                  </div>
                );
              }
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default Reservations;
