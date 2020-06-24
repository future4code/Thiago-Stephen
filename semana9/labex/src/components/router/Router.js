import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import HomePage from '../home/HomePage';
import AproveOrRejectPage from '../aproveOrReject/AproveOrRejectPage';
import CreateTravelPage from '../createTravel/CreateTravelPage';
import GeneralPage from '../general/GeneralPage';
import ListTripPage from '../listTrip/ListTripPage';
import LoginPage from '../login/LoginPage';
import PassengerListPage from '../passengerList/PassengerListPage';
import SelectPassengerPage from '../selectPassenger/SelectPassenger';
import SelectUserPage from '../selectUser/SelectUserPage';
import TravelDetailsPage from '../travelDetails/TravelDetailsPage';
import { RegisterUserPage } from '../registerUser/RegisterUserPage';

    const Router = () => {
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/AproveOrRejectPage">
                    <AproveOrRejectPage />
                </Route>
                <Route exact path="/CreateTravelPage">
                    <CreateTravelPage />
                </Route>
                <Route exact path="/GeneralPage">
                    <GeneralPage/>
                </Route>
                <Route exact path="/ListTripPage">
                    <ListTripPage />
                </Route>
                <Route exact path="/LoginPage">
                    <LoginPage />
                </Route>
                <Route exact path="/PassengerListPage">
                    <PassengerListPage />
                </Route>
                <Route exact path="/RegisterUserPage">
                    <RegisterUserPage />
                </Route>
                <Route exact path="/SelectPassengerPage">
                    <SelectPassengerPage />
                </Route>
                <Route exact path="/SelectUserPage">
                    <SelectUserPage />
                </Route>
                <Route exact path="/TravelDetailsPage">
                    <TravelDetailsPage />
                </Route>
            </Switch>
            </BrowserRouter>
        )  
    }

export default Router