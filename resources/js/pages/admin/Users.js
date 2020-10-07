import React, {useEffect, useState} from 'react';
import moment from 'moment'
import PropTypes from "prop-types";
import Image from "../../components/images/Image";
import {EditUser} from "./EditUser";
import {Preloader} from "../../components/preloaders/Preloader";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";

export function Users({scrollMultiplier, search}) {
    const {users, isLoading} = useSelector(store => store.userReducer);
    const [selectedUser, setSelectedUser] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_USERS});
    }, []);

    const usersJsx = users
        .filter((user) => (user.id.toString().includes(search)
            || user.name.toLowerCase().includes(search)
            || user.email.toLowerCase().includes(search)
            || user.role.role.toLowerCase().includes(search)
            || user.level.user_level.toLowerCase().includes(search)))
        .map((user, i) => {
        if(i > scrollMultiplier * 10) return ;
        return (
            <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td><Image path={user.avatar} size='80px' title={user.name} /></td>
                <td>
                    <h5 className="fas fa-user-edit text-warning d-flex justify-content-center"
                       onClick={() => setSelectedUser(user.id)}
                    />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role.role}</td>
                <td>{user.level.user_level}</td>
                <td>{user.additional}</td>
                <td>{moment(user.created_at).format('DD-MM-YYYY HH:mm')}</td>
            </tr>
        )
    });

    return (
        <>
            {isLoading && <Preloader/>}
            {selectedUser && <EditUser id={selectedUser} setModal={setSelectedUser}/>}

            <table className='table table-bordered table-dark'>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col" >Аватар</th>
                        <th scope="col">Ред.</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Email</th>
                        <th scope="col">Роль</th>
                        <th scope="col">Уровень</th>
                        <th scope="col">Доп.</th>
                        <th scope="col">Создан</th>
                    </tr>
                </thead>
                <tbody>
                    {usersJsx}
                </tbody>
            </table>
        </>
    )
}

Users.propTypes = {
    scrollMultiplier: PropTypes.number,
    search: PropTypes.string
};
