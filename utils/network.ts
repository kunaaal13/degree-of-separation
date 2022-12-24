import { data } from '../constants'
import { addFriend, addUser } from './map'

export function createNetwork(users: [User]) {
  // create a map of users to their friends
  const graph: Map<String, Array<String>> = new Map()

  // add users to the map
  users.map((user) => {
    addUser(graph, user.username)
  })

  // add friends to the map
  users.map((user) => {
    user.friends.map((friend) => {
      addFriend(graph, user.username, friend)
    })
  })

  console.log(graph)
  return graph
}
