import React from "react";
import PersonCard from "./componentes/PersonCard/PersonCard";

class App extends React.Component {

    render() {
        
    return(
        <div className="container">
            <PersonCard firstName="Augusto" lastName="Medina" age={33} hairColor="Black" />
            <PersonCard firstName="María" lastName="Mosquera" age={31} hairColor="Red" />
            <PersonCard firstName="Hanna" lastName="Ramírez" age={5} hairColor="Brown" />
            <PersonCard firstName="Isabel" lastName="Ramírez" age={3} hairColor="Black" />
        </div>
    );
    }

}

export default App;