import { data } from '../constants'

export const initializeUsers = () => {
  const newUser: User = {
    username: data[0].username,
    name: data[0].name,
    img: data[0].img,
    friends: data[0].friends,
    bio: data[0].bio,
  }

  const arr: [User] = [newUser]

  for (let i = 1; i < data.length; i++) {
    const user: User = {
      username: data[i].username,
      name: data[i].name,
      img: data[i].img,
      friends: data[i].friends,
      bio: data[i].bio,
    }

    arr.push(user)
  }

  return arr
}
