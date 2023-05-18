import { createServer } from "node:http"

const server = createServer()

server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql")
})
