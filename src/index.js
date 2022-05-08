import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from './roots/App';

const result = Root();

function Root() {

    if (document.getElementById('root')) {
        return [<BrowserRouter><App /></BrowserRouter>, "root"];
    }
}

ReactDOM.render(result[0] , document.getElementById(result[1]) );
