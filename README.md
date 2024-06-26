## Project

Node.js with Streams, a Rest API using the HTTP native module and a simple local Database with JSON.

<p style="text-align: center">
  <img src=".github/print.png" alt="Cover of the project" width="100%" style="border-radius:10px;" />
</p>

This project was developed during a @rocketseat course for study purposes.

## Tech

<table>
  <tbody>
    <tr>
        <td>Node.js</td>
        <td>Streams</td>
        <td>Rest API</td>
        <td>Middleware</td>
        <td>HTTP</td>
        <td>JSON Database</td>
        <td>Regex</td>
    </tr>
  </tbody>
</table>


## Getting Started

Install dependencies

```bash
npm install
```

## Project 1: Fake stream upload

Start the server on `port: 3334`.
```bash
npm run stream-server
```

With the server up, run the fake stream upload:

```bash
npm run stream-upload
```

---


## Project 2: Rest API with local JSON database

Start the server on `port: 3333`.
```bash
npm run dev
```

### API Routes

### `GET /users`
Retrieves a list of users. You can pass a query parameter `search` to filter users by their `id`, `name`, or `email`.

- **Query Parameters**:
  - `search` (optional): A string to filter users.

- **Response**:
  - `200 OK`: Returns an array of user objects.

### `POST /users`
Creates a new user.

- **Request Body**:
  - `name`: Name of the user.
  - `email`: Email of the user.

- **Response**:
  - `201 Created`: Returns the created user object.

### `PUT /users/:id`
Updates an existing user.

- **URL Parameters**:
  - `id`: The unique identifier of the user.

- **Request Body**:
  - `name`: New name of the user.
  - `email`: New email of the user.

- **Response**:
  - `204 No Content`: Indicates successful update.

### `DELETE /users/:id`
Deletes a user.

- **URL Parameters**:
  - `id`: The unique identifier of the user.

- **Response**:
  - `204 No Content`: Indicates successful deletion.


## Contribute

- Fork this repository
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'feat: add my new feature'`
- Push it to your branch: `git push origin my-feature`

After merging your pull request, your branch can be deleted.

Check the details about the types, verbs and commit messages here [CONTRIBUTING.md](./.github/CONTRIBUTING.md)

Also check the [CODE_OF_CONDUCT.md](./.github/CODE_OF_CONDUCT.md)

## License

This project is [MIT Licensed](./LICENSE)
