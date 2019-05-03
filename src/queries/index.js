import { gql } from 'apollo-boost';

export const FETCH_RESERVATIONS = gql`
  query($query: QueryInput) {
    totalReservations
    reservations(query: $query) {
      id
      guestName
      hotelName
      arrivalAt
      departureAt
    }
  }
`;

export const CREATE_RESERVATION = gql`
  mutation($data: ReservationInput!) {
    createReservation(data: $data) {
      id
      guestName
      hotelName
      arrivalAt
      departureAt
    }
  }
`;

export const FETCH_RESERVATION = gql`
  query($id: ID!) {
    getReservation(id: $id) {
      id
      guestName
      hotelName
      arrivalAt
      departureAt
    }
  }
`;
