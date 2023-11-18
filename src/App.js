import { useEffect, useState } from "react";
import Users from "./components/Users";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [data , setData] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(error => console.log(error))
  }, [] )

  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' exact element={<Users data={data} />} />
          <Route path='/detail/:id' element={<Detail data={data} />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
