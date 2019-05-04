# graphql-test-client

## Description

This project use `React`, `React-CLI`, `react-apollo`, `kendo-react-dateinputs`（datetime input）,`react-paginate`(react pagination lib),[`nes.css`](https://github.com/nostalgic-css/NES.css) (css libs), [`glexgrid`](http://flexboxgrid.com/)(grid system lib)

_The app client will use `localhost:3000/grapql` as the graphql endpoint._

![image](https://user-images.githubusercontent.com/2676686/57124406-4923be00-6db8-11e9-85ec-61d775c5a52a.png)

- Fetch a reservation info by id
  ![image](https://user-images.githubusercontent.com/2676686/57124520-acadeb80-6db8-11e9-93f6-35c11830f177.png)
- Create a reservation
  ![image](https://user-images.githubusercontent.com/2676686/57124847-e29f9f80-6db9-11e9-861d-8bf249214bb6.png)
  > To make a reservation the `ArrivalAt` needs to a timestamp that after current datetime. and the Deparature can't be over a year after current timestamp.
- List all reservations with pagination

## Insteallation

### Requirement

- Node v10
- yarn(npm)

### Start Dev Env

Locate to the root of the project foder.

1. `yarn`/`npm insteall` install the package modules.
2. `yarn run start` start the client on local(development) environment.

visit `localhost:3006`

## Structure

```bash
.
├── LICENSE
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html                   # The app target html file
│   └── manifest.json
├── src
│   ├── components
│   │   ├── App.css                  # App customized css file
│   │   ├── App.js                   # Main app component
│   │   ├── ErrorNotify.js           # General error meesage component
│   │   ├── FetchReservation.js      # Fetch reservations component
│   │   ├── ReservateForm.js         # Create reservations form component
│   │   └── Reservations.js          # All reservations component
│   ├── index.css
│   ├── index.js
│   ├── layout
│   └── queries                       # Graphql Queries
│       └── index.js
└── yarn.lock

```
