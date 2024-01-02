import {useEffect, useState} from "react";
import Tour from "./Components/Tour/index.jsx";
import Loading from "./Components/Loading/index.jsx";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const[tours, setTours] = useState([])
  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await fetch(url)
        const tours = await response.json()
        setTours(tours)
      } catch (err) {
        console.log(err)
      }
    };
    getTours()
  },[])

  return <main className="main">
  <h2>Our tours</h2>
    <Loading/>
    <section>
      {tours.map((tour) => {
        const {id, name, info, image, price} = tour
        return <ul key={id} className="tours">
          <li className="single-tour">
            <img src={image} alt={info} className="single-tour"/>
            <h2 className="tour-info">{name}</h2>
            <h3 className="tour-price">{price}</h3>
            <p className='tour-info'>{info}</p>
          </li>
        </ul>
      })}
    </section>
    {/*<Tour/>*/}
  </main>;
};
export default App;
