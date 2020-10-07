import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import Image from "../../components/images/Image";
import {Title} from "../../components/titles/Title";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/actionTypes";

export const MyNotes = ({courses}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actions.GET_ALL_COURSES});
    }, []);

    const myNotesKeys = [];

    Object.keys(localStorage).forEach((key) => {
        key.includes('@course|') && myNotesKeys.push(key);
    });

    if(!courses.length) return <Title size={'16px'} margin={'5px'} textAlign={'center'} text={'Похоже, вы ещё не делали заметок на этом устройстве...'}/>;

    const notesList = myNotesKeys.map((key, i) => {
        const note = localStorage.getItem(key);
        const id = key.split('|')[1];
        const course = courses.find((course) => course.id === +id);

        return (
            <tr key={i} onClick={() => {}}>
                <th scope="row">{i+1}</th>
                <td><Image path={course.image} size={'50px'} title={course.title}/></td>
                <td><Link to={`/portal/course/${course.id}`}>{course.title}</Link></td>
                <td>{note}</td>
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
                        <th scope="col">Изобр.</th>
                        <th scope="col">Курс</th>
                        <th scope="col">Заметки</th>
                    </tr>
                    </thead>
                    <tbody>
                    {notesList.reverse()}
                    </tbody>
                </table>
            </div>
        </>
    )
};

MyNotes.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object)
};
