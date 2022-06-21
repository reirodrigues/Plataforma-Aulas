import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql `
query {
  lessons {
    id
    title

  }
}
`

interface lessons {
  id: string,
  title: string
}

function App() {
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])

  const { data } = useQuery<{ lessons: lessons[]}>(GET_LESSONS_QUERY)

  console.log(data);

  return (
    <ul>
      {data?.lessons.map(lessons => {
        return <li key={lessons.id}>{lessons.title}</li>
      })}
    </ul>
    )
}
export default App
