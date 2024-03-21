import React, { useEffect, useState } from "react";
import axios from "axios";

// function Datafetching() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//       setTodos(res.data.todos);
//     });
//   }, []);
//   return (
//     <div>
//       {todos.map((todo) => (
//         <Track todo={todo} />
//       ))}
//     </div>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

// export default Datafetching;

//Ensure hook starts with a use for nomenclature
function useTodos(n) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    //clear prev running value fetch to avoid excessive axios calls
    return () => {
      clearInterval(value);
    };
  }, [n]);

  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodos(10);

  return (
    <>{loading ? "Loading..." : todos.map((todo) => <Track todo={todo} />)}</>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;

//
// Code given by VERCEL: SWR

// import useSwr from 'swr'

// const fetcher= async function(url) {
//     const data= await fetch(url);
//     const json= await data.json();
//     return json;
// }

// function Profile() {
//     const {data, erro, isLoading}= useState("https://sum-server.100xdevs.com/todos", fetcher)

//     if(error) return <div>failed to load...</div>
//     if(isLoading) return <div>Loading...</div>
//     return <div>hello, you have {data.todos.length} todos!</div>
//}
