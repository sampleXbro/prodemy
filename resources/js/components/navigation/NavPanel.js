import React from 'react'
import axios from "axios";
import Image from "../images/Image";
import {Link} from "react-router-dom";
import {Badge} from "../badges/Badge";
import {number, object} from "prop-types";

export function NavPanel({currentUser, unreadQty}){

    function handleLogout(){
        axios.post('/logout').then(() => {
            window.history.pushState('', '', '/');
            window.history.go(0);
        });
    }

    return(
        <nav className=" navbar navbar-expand-lg fixed-top py-0 shadow-sm">
            <div className="container position-relative">
                <div className='position-absolute small-nav-panel-avatar-container'>
                    <Link to='/portal/cabinet/studied-courses'>
                        <Image path={currentUser.avatar} size='25px' margin={'0'} borderRadius='5px' title='smallUserAvatar'/>
                    </Link>
                </div>
                <div className='position-absolute small-nav-panel-badge'>
                    <Link to='/portal/cabinet/my-messages'>
                        <Badge color='#38c172'
                               text={unreadQty > 10 ? '10+' : unreadQty}
                               size='22px'
                               textSize='12px'
                               textColor='white'
                               radius='0 100% 100% 100%'
                        />
                    </Link>
                </div>
                <a id="main-logo" className="text" href="/">
                    prodemy
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="{{ __('Переключение навигации') }}">
                    <span className="menu-icon fas fa-bars"/>

                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                    {!currentUser ?
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/portal/courses">Вход</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/portal/courses">Регистрация</a>
                            </li>
                        </ul>
                        :
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={'/portal/basics'}><p className="nav-link">Базовые сведения</p></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/portal/advanced'}><p className="nav-link">Продвинутые техники</p></Link>
                            </li>

                            <li className="nav-item">
                                <Link to={'/portal/courses'}><p className="nav-link">Обучающие курсы</p></Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Вы вошли как <span>{currentUser.name}</span>
                                </a>

                                <div className="bg-dark dropdown-menu dropdown-menu-right text-center" aria-labelledby="navbarDropdown">
                                    <Link to={'/portal/cabinet/index'}>
                                        <p className="bg-dark nav-link dropdown-item logout-button">Мой кабинет</p>
                                    </Link>
                                    <a className="bg-dark nav-link dropdown-item logout-button" onClick={handleLogout}>
                                        Выйти
                                    </a>
                                </div>
                            </li>
                        </ul>
                    }

                </div>
            </div>
        </nav>

    )
}

NavPanel.propTypes = {
    currentUser: object,
    unreadQty: number
};
