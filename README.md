1. `create-react-app 项目名称`
2. 根组件 App.js
3. JSX 用法
   1. return 后需要有（）
   2. jsx 只能返回一个根元素。如何需要加多个，则需要在根路径下加空标签`<>`
4. jsx 插值写法 `{}`
5. jsx 中的属性一般是用驼峰命名法

### 数组用法：

```
import { Fragment } from "react"
function App() {
     const list = [
     { id: 1, name: "小吴" },
     { id: 2, name: "小李" },
     { id: 3, name: "小花" },
     ]
     const listContent = list.map((item) => (
     <Fragment>
     <li key={item.name}>{item.name}</li>
     <li>-----</li>
     </Fragment>
     ))
     return <ul>{listContent}</ul>
 }
 export default App
```

### 事件

### 状态 useState

1. 对象更新

```
import { useState } from "react"
function App() {
  const [data, setData] = useState({
    title: "默认标题",
    content: "默认内容",
  })

  function handleClick(e) {
    setData({
      ...data, //展开运算符(...写在前面，即将原先的属性展开，并将后面的同名属性的值覆盖之前的同名属性值)
      content: "新内容",
    })
  }
  return (
    <>
      <div title={data.title}>{data.content}</div>
      <button onClick={handleClick}>按钮</button>
    </>
  )
}
export default App
```

2. 数组
   2.1 数组增加

```
import { useState } from "react"
function App() {
 const [data, setData] = useState([
   { id: 1, name: "小吴" },
   { id: 2, name: "小李" },
   { id: 3, name: "小花" },
 ])
 const listData = data.map((item) => <li key={item.id}>{item.name}</li>)
 let id = 3
 function handleClick(e) {
   setData([
     ...data, //此事...data可以在前，也可以在后。在前则代表把原来的数组内容放在前面，新增对象放后面
     {
       id: ++id,
       name: "新内容",
     },
   ])
 }
 return (
   <>
     <ul>{listData}</ul>
     <button onClick={handleClick}>按钮</button>
   </>
 )
}
export default App
```

2.2 删除第二个数组(用 filter)

```
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
```
