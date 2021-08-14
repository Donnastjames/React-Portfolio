import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin, faStackOverflow);

const App = () => <PortfolioContainer />;

export default App;
