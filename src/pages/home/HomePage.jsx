import React from "react";
import { SearchForm } from "./components";

import backgroundImage from "../../assets/images/background-image.jpg";

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-content">
                <div className="home-bg">
                    <div style={{
                        background: `url(${backgroundImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                </div>
                <SearchForm />
            </div>
        )
    }
}

export default HomePage;