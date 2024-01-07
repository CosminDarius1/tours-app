import {useEffect, useState} from "react";
import Tour from "./Components/Tour/index.jsx";
import Loading from "./Components/Loading/index.jsx";
import Tours from "./Components/Tours/index.jsx";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setisLoading] = useState(true)
  const[tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

  const fetchTours = async () => {
    setisLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } catch (err) {
      console.log(err)
    }
    setisLoading(false)
  }


  useEffect(() => {
    fetchTours()
  },[])

  if(isLoading) {
    return <main>
    <Loading/>
    </main>
  }

  if(tours.length === 0) {
    return <main className='title'>
      <h2>No tours left</h2>
      <button type='button' style={{marginTop: '2rem'}} className='btn' onClick={() => fetchTours()}>Refresh</button>
    </main>
  }

  return <main className="main">
    <Tours tours={tours} removeTour={removeTour}/>

    {/*<Tour/>*/}
  </main>;
};
export default App;
