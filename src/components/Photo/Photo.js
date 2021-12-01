import firstImage from './1.jpg';
import secondImage from './2.jpg';
import thirdImage from './3.jpg';
import forthImage from './4.jpg';
import fifthImage from './5.jpg';
import sixthImage from './6.jpg';
import "./styles.css";

export default function Photo() {
    return (
        <div className="photo-container">
            <img src={firstImage} className="img" alt=""/>
            <img src={secondImage} className="img" alt="" />
            <img src={thirdImage} className="img" alt="" />
            <img src={forthImage} className="img" alt="" />
            <img src={fifthImage} className="img" alt="" />
            <img src={sixthImage} className="img" alt="" />
        </div>
    )
}