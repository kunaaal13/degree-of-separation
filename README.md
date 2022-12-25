# SocialBook

This is a social media dashboard built where we can add users, and make them friends of each other, and using a user profile we can get to know about the friends of the user and the suggestions for users that we can add as friend. For the suggestions, we can see the possible path in the network of users between user and the suggested user.

## Approach to find degree of separation

Users connected on a social media can be thought of as a graph, where users are nodes and the friendship relation is an edge. The degree of separation between two users is the minimum number of edges that need to be traversed to reach from one user to another. The degree of separation between two users can be found using the [Breadth First Search](https://en.wikipedia.org/wiki/Breadth-first_search) algorithm. The algorithm starts from the source user and traverses the graph in a breadth-first manner. The algorithm stops when the destination user is found. The number of edges traversed is the degree of separation between the two users.

## Tech Stack

NextJs 13, Typescript, Tailwind CSS, Cloudinary(Image Hosting)

## Features

- Light/dark mode toggle
- Add a user
- View a user profile
- Delete user's friends
- Add friends to user from suggestions
- Network route between a user and a suggestion
- Dashboard to view all users

## Screenshots

#### Home Light

![Home Light](https://github.com/kunaaal13/degree-of-separation/blob/main/public/home-light.png)

#### Home Dark

![Home Dark](https://github.com/kunaaal13/degree-of-separation/blob/main/public/Home-dark.png)

#### Profie Light

![Profile light](https://github.com/kunaaal13/degree-of-separation/blob/main/public/Profile-light.png)

#### Sign Up Light

![Sign Up](https://github.com/kunaaal13/degree-of-separation/blob/main/public/SignUp-light.png)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_Upload_Preset`

`NEXT_PUBLIC_Cloud_Name`

[To get these environment variables, refer this article](https://spacejelly.dev/posts/how-to-programmatically-upload-images-to-cloudinary-in-react-next-js/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/kunaaal13/degree-of-separation.git
```

Go to the project directory

```bash
  cd degree-of-separation
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
