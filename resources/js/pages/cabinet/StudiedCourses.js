import React, {useEffect} from 'react';
import moment from "moment";
import PropTypes from "prop-types";
import {Title} from "../../components/titles/Title";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ProgressBar} from "../../components/progress/ProgressBar";
import actions from "../../redux/actions/actionTypes";

export const StudiedCourses = ({user, courses}) => {
    const dispatch = useDispatch();

    useEffect(() => {dispatch({type: actions.GET_ALL_COURSES})}, []);

    if(courses.length < 1) return <Title size={'16px'} margin={'5px'} textAlign={'center'} text={'Похоже, вы ещё не добавляли курсы и "Изучаемые"...'}/>;

    const myCoursesList = user.studied_courses.map((item, i) => {
        const course = courses.find((course) => (course.id === item.course_id));
        return (
            <tr key={course.id} >
                <th scope="row">{i+1}</th>
                <td><Link to={`/portal/course/${course.id}`}>{course.title}</Link></td>
                <td><ProgressBar progress={Math.round(item.course_position*100)}/></td>
                <td>{moment(item.created_at).format('DD.MM.YYYY HH:mm')}</td>
            </tr>
        )
    });

    return (
        <>
            <div className='cabinet-page-container'>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Курс</th>
                        <th scope="col">Прогресс</th>
                        <th scope="col">Начало</th>
                    </tr>
                    </thead>
                    <tbody>
                    {myCoursesList.reverse()}
                    </tbody>
                </table>
            </div>
        </>
    )
};

StudiedCourses.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.object
};
