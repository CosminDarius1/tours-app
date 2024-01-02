
const Tour = ({tours}) => {
    return <>
            <ul className='tours'>
                {tours.map((tour) => {
                    const {id, name, info, image, price} = tour
                    return <li key={id}>
                        <img src={image} alt={info} className="single-tour"/>
                    </li>
                })}
            </ul>
    </>
}

export default Tour