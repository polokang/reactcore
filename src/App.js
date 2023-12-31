import { useState } from "react"
function App() {
  const [data, setData] = useState([
    { id: 1, name: "小吴" },
    { id: 2, name: "小李" },
    { id: 3, name: "小花" },
  ])
  const listData = data.map((item) => <li key={item.id}>{item.name}</li>)
  function handleClick(e) {
    setData(data.filter((item) => item.id !== 2))
  }
  return (
    <>
      <ul>{listData}</ul>
      <button onClick={handleClick}>按钮</button>
    </>
  )
}
export default App
