import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Chat} from "./chat/Chat";
import {history} from "../utils/history";
import {AdminPanel} from "../pages/admin/AdminPanel";
import {NavPanel} from "./navigation/NavPanel";
import {BasicsPage} from "../pages/basics/BasicsPage";
import {ErrorWindow} from "./errors/ErrorWindow";
import {Preloader} from "./preloaders/Preloader";
import {CoursesPage} from "../pages/courses/CoursesPage";
import {CabinetPage} from "../pages/cabinet/CabinetPage";
import actions from "../redux/actions/actionTypes";
import configureStore from '../redux/sagas/config';
import {AdvancedPage} from "../pages/advanced/AdvancedPage";
import {SinglePostPage} from "./posts/SinglePostPage";
import {Router, Switch, Route} from "react-router-dom";
import {SingleCoursePage} from "../pages/singleCoursePage/SingleCoursePage";
import {Provider, useDispatch, useSelector} from 'react-redux';

export default function App() {
    const {courses} = useSelector(store => store.coursesReducer);
    const user = useSelector(store => store.userReducer.currentUser);
    const privateMessages = useSelector(store => store.privateMessagesReducer.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actions.GET_CURRENT_USER});
        dispatch({type: actions.GET_PRIVATE_MESSAGES});
    },[]);

    if (!Object.keys(user).length || !privateMessages || !privateMessages.length) return <Preloader/>;

    const myUnreadMessagesQty = privateMessages.filter(mes => mes.recipient_id === user.id && mes.status === 'delivered').length;

    return (
        <Router history={history}>

            <ErrorWindow/>

            {location.pathname.split('/')[1] === 'portal' &&
            <NavPanel currentUser={user} unreadQty={myUnreadMessagesQty}/>}

            <Chat user={user} privateMessages={privateMessages}/>

            <Switch>
                <Route exact path={'/admin/:slug'}
                       render={() => <AdminPanel myUnreadMessagesQty={myUnreadMessagesQty}/>}/>

                <Route exact path={'/portal/basics'}
                       render={() => <BasicsPage/>}/>

                <Route exact path={'/portal/advanced'}
                       render={() => <AdvancedPage/>}/>

                <Route exact path={'/portal/post/:id'}
                       render={() => <SinglePostPage user={user}/>}/>

                <Route exact path={'/portal/courses'}
                       render={() => <CoursesPage courses={courses}/>}/>

                <Route exact path={'/portal/course/:id'}
                       render={() => <SingleCoursePage user={user}/>}/>

                <Route path={'/portal/cabinet/:slug'}
                       render={() => <CabinetPage user={user} courses={courses}/>}
                />
            </Switch>

        </Router>
    )
}

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={configureStore()}>
            <App />
        </Provider>,
        document.getElementById('root'));
}
