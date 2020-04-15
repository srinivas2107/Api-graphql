const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
}

type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}

type Food {
  _id: ID!
  name: String!
  price: Float!
  date: String!
  creator: User!
}


type User {
  _id: ID!
  email: String!
  password: String
  createdEvents: [Event!]
  createdFoodItems: [Food!]
}

input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

input FoodItemInput {
  name: String!
  price: Float!
  date: String!
}

input UserInput {
  email: String!
  password: String!
}

type RootQuery {
    events: [Event!]!
    bookings: [Booking!]!
    fooditems: [Food!]!
}

type RootMutation {
    createEvent(eventInput: EventInput): Event
    createFoodItem(foodItemInput: FoodItemInput): Food
    createUser(userInput: UserInput): User
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
