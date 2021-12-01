import mainImage from "./mainImage.png";
import "./styles.css"

const Main = () => { 
    return (
        <div className ="main-container">
            <h2>Understanding The Fundamentals of Routing in React</h2>
            <img src={mainImage} className="main-img" alt="" />
            <p>
                Routing is the ability to move between different parts of an application when a user enters a URL or clicks an element (link, button, icon, image etc) within the application.
            </p>
        </div>
    )
}

export default Main;