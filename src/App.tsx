import { useState } from "react"
import Collection from "./components/Collection.tsx"
import search from "./assets/search.png"
import image1 from "./assets/image1.png"
import image2 from "./assets/image2.png"

export default function App() {
    const [menu, setMenu] = useState<boolean>(false)

    function toggleMenu() {
        setMenu(!menu)
    }
    
    return (
        <div className="app-container">
            <header>
                <button 
                    onClick={toggleMenu}
                    className="menu-button"
                >
                    Menu
                </button>

                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Gifts</a></li>
                    <li><a href="#">Our magazine</a></li>
                </ul>

                <div className="right-elements-container">
                    <img
                        src={search}
                        width="26"
                        alt="Search"
                        className="search-icon"
                    />
                    <button className="login">Log In</button>
                    <button className="signup">Sign Up</button>
                </div>
            </header>

            {
                menu ?
                <ul className="menu">
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Gifts</a></li>
                    <li><a href="#">Our magazine</a></li>
                </ul> :
                null
            }

            <main>
                <div className="central-container">
                    <h1>The gift of happiness</h1>
                    <p>Show your gratitude with one of our gift sets, large and small, specially designed to spread joy to someone you love.</p>
                    <button>SHOP NOW</button>
                </div>
            </main>

            <section>
                <Collection
                    image={image1}
                    imageAlt="Image 1"
                />

                <Collection
                    image={image2}
                    imageAlt="Image 2"
                />
            </section>
        </div>
    )
}