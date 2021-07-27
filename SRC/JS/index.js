// import react intothe bundle
import React from "react";
import ReactDOM from "react-dom";


// include bootstrap npm library intothe bundle
import "bootstrap";

// including css file into the bundle
import "../Style/Style"

// import components
import {Home} from "../JS/Home";

// render react application
ReactDOM.render(<Home/>, document.querySelector("app"));