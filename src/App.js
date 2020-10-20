import React from 'react';
import { Switch, Route } from 'react-router-dom'

import RecountHeader from "./views/Layout/Header/Header";
import RecountHome from "./views/Home/Home";
import RecountAboutMe from "./views/AboutMe/AboutMe";
import RecountEditProfile from "./views/EditProfile/EditProfile";
import RecountFooter from "./views/Layout/Footer/Footer";

function App() {

    return (
        <div className="page-frame">
			<RecountHeader/>

			<Switch>
				<Route path={'/'} exact>
					<RecountHome/>
				</Route>
				<Route path={'/about-me'}>
					<RecountAboutMe/>
				</Route>
				<Route path={'/edit-profile'}>
					<RecountEditProfile/>
				</Route>
			</Switch>

			<RecountFooter/>
        </div>
    );
}

export default App;
