/* eslint-disable react/prop-types */
import './Concept.css'
const Concept = ({ image, title, description }) => {
    return (
        <div className="conceptBlock">
            <div className="imgBlock">
                <img src={image} alt={title} height={200} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Concept