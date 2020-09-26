import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import Image from "../images/Image";
import moment from 'moment'
import {truncateText} from "../../utils/truncateText";
import {Preloader} from "../preloaders/Preloader";
import {EditCourse} from "./EditCourse";
import {Link} from "react-router-dom";
import {AddCourse} from "./AddCourse";

export function Courses({scrollMultiplier, search, currentUser}) {
    const {courses, isLoading} = useSelector(store => store.coursesReducer);
    const [modal, setModal] = useState({type: '', id: ''});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_COURSES});
    }, []);

    const coursesJsx = courses
        .filter((course) => (course.id.toString().includes(search)
            || course.title.toLowerCase().includes(search)
            || course.description.toLowerCase().includes(search)
            || course.author.name.toLowerCase().includes(search)
            || course.level.level.toLowerCase().includes(search)
            || course.software.software.toLowerCase().includes(search)))
        .map((course, i) => {
        if(i > scrollMultiplier * 10) return ;
        return (
            <tr key={course.id} >
                <th scope="row">{course.id}</th>
                <td><Image path={course.image} size='80px' title={course.title} /></td>
                <td><a href={course.link} target='_blank'>{course.link}</a></td>
                <td onClick={() => setModal({type: 'edit', id: course.id})}>
                    <h5 className="fas fa-edit text-warning"/>
                </td>
                <td><Link to={`/portal/course/${course.id}`} target='_blank'>{course.title}</Link></td>
                <td>{truncateText(course.description, 10)}</td>
                <td>{course.author.name}</td>
                <td>{(+course.full_duration / 60).toFixed(0)} мин</td>
                <td>{course.lessons_qty}</td>
                <td>{truncateText(course.what_will_learn, 10)}</td>
                <td>{truncateText(course.requirements, 10)}</td>
                <td>{course.is_recommended ? <h3 className="fas fa-check-circle text-success"/> : ''}</td>
                <td>{course.level.level}</td>
                <td>{course.software.software}</td>
                <td>{course.views}</td>
                <td>{moment(course.created_at).format('DD-MM-YYYY HH:mm')}</td>
            </tr>
        )
    });

    return (
        <>
            {isLoading && <Preloader/>}
            {modal.type === 'add' && <AddCourse setModal={setModal} currentUser={currentUser}/>}
            {modal.type === 'edit' && <EditCourse id={modal.id} setModal={setModal}/>}
            <div className={'addButton'} onClick={() => setModal({...modal, type: 'add'})}>
                <h3 className="fas fa-plus" style={{margin: 0}}/>
            </div>
            <table className='table table-bordered table-dark'>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Изобр.</th>
                        <th scope="col">Ссылка</th>
                        <th scope="col">Ред.</th>
                        <th scope="col">Название</th>
                        <th scope="col">Описание</th>
                        <th scope="col">Автор</th>
                        <th scope="col">Продолж.</th>
                        <th scope="col">Уроки</th>
                        <th scope="col">Польза</th>
                        <th scope="col">Требования</th>
                        <th scope="col">Рекоменд.</th>
                        <th scope="col">Уровень</th>
                        <th scope="col">ПО</th>
                        <th scope="col">Просмотры</th>
                        <th scope="col">Создан</th>
                    </tr>
                </thead>
                <tbody>
                    {coursesJsx}
                </tbody>
            </table>
        </>
    )
}
