// Add a user to a map of users to their friends
export function addUser(map: Map<String, Array<String>>, user: String) {
  if (map.has(user)) return
  map.set(user, [])
}

// Add a friend to a user's list of friends
export function addFriend(
  map: Map<String, Array<String>>,
  user: String,
  friend: String
) {
  const friends = map.get(user)
  if (friends?.includes(friend) === false) {
    map.get(user)?.push(friend)
    map.get(friend)?.push(user)
  }
}

// Remove a friend from a user's list of friends
export function removeFriend(
  map: Map<String, Array<String>>,
  user: String,
  friend: String
) {
  const friends = map.get(user)
  if (friends?.includes(friend) === true) {
    map.get(user)?.splice(friends.indexOf(friend), 1)
    map.get(friend)?.splice(friends.indexOf(user), 1)
  }
}

// Get all degree of separation two users
export function getAllMutualPaths(
  graph: Map<String, Array<String>>,
  start: String,
  end: String
) {
  const visited: Set<String> = new Set()
  const queue: Array<[String, Array<String>]> = [[start, [start]]]
  const paths: Array<Array<String>> = []

  while (queue.length > 0) {
    const [user, path] = queue.shift()!
    if (user === end) {
      paths.push(path)
    }
    if (!visited.has(user)) {
      visited.add(user)
      for (const friend of graph.get(user)!) {
        queue.push([friend, [...path, friend]])
      }
    }
  }

  return paths
}

// Dijkstra's algorithm
export function getShortestPath(
  graph: Map<String, Array<String>>,
  start: String,
  end: String
) {
  const visited: Set<String> = new Set()
  const queue: Array<[String, Array<String>]> = [[start, [start]]]

  while (queue.length > 0) {
    const [user, path] = queue.shift()!
    if (user === end) {
      return path
    }
    if (!visited.has(user)) {
      visited.add(user)
      for (const friend of graph.get(user)!) {
        queue.push([friend, [...path, friend]])
      }
    }
  }

  return []
}
