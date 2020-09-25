import React, {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import ReactPlayer from 'react-player/youtube'
import {Title} from "../titles/Title";
import {Reviews} from "./Reviews";
import {Notes} from "./Notes";
import {WriteReview} from "./WriteReview";
import {
    createStudiedCourse,
    deleteStudiedCourse,
    getCourseById,
    updateStudiedCourse
} from "../../redux/actions/actionCreators";
import {ProgressBar} from "../progress/ProgressBar";
import {Preloader} from "./Preloader";
import actionTypes from "../../redux/actions/actionTypes";

export function SingleCoursePage({user}){
    const {id} = useParams();
    const singleCourse = useSelector(store => store.coursesReducer.currentCourse);
    const {reviews, isLoading} = useSelector(store => store.reviewsReducer);
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    const player = useRef(null);

    useEffect(() => {
        dispatch(getCourseById(id));
        dispatch({type: actionTypes.GET_ALL_REVIEWS});
        window.scrollTo(0, 0);
    }, []);

    if(singleCourse.length < 1) return <Preloader/>;

    const studiedCourse = user.studied_courses.find((item) => {
        return item.course_id === singleCourse.id
    });

    const reviewsByCourse = reviews.filter((review) => review.course_id === singleCourse.id);

    const studyButtonStyles = {
        color: studiedCourse ? '#38c172' : '#F38300',
        borderColor: studiedCourse ? '#38c172' : '#F38300',
    };

    const studyButtonText = studiedCourse
        ?
        <i className="fas fa-check"> Вы изучаете этот курс </i>
        :
        <i className="fas fa-user-graduate"> Изучать курс </i>;

    const handleProgress = (e) => {
        setProgress(e.played)
    };

    const handleStudyClick = () => {
        if(!studiedCourse){
            const data = {
                course_id: singleCourse.id,
                user_id: user.id,
                course_position: progress
            };
            dispatch(createStudiedCourse(data))
        } else {
            dispatch(deleteStudiedCourse(studiedCourse.id))
        }
    };

    const handlePauseVideo = () => {
        if(studiedCourse){
            dispatch(updateStudiedCourse(studiedCourse.id, {course_position: progress}))
        }
    };

    const handlePlayerReady = (e) => {
        if(studiedCourse){
            player.current.seekTo(studiedCourse.course_position, 'fraction');
        }
    };

    const handleSeekMouseUp = (e) => {
        player.current.seekTo(parseFloat(e.target.value))
    };

    const playerStyle = {
        display: 'flex',
        flex: 1,
        height: '600px',
        border: '1px solid blue'
    };

    return (
        <div className={'container-fluid single-course-container'}>
            {isLoading && <Preloader/>}
            <div className='d-flex justify-content-between  flex-wrap'>
            <Title text={singleCourse.title.toUpperCase()} weight={400} size={'24px'} />
            <button onClick={handleStudyClick} className={'study-course-button'} style={studyButtonStyles}>{studyButtonText}</button>
            </div>
            <div className='d-flex justify-content-between flex-column'>
                <div className='d-flex'>
                    {ReactPlayer.canPlay(singleCourse.link)
                        ?
                    <ReactPlayer
                        url={singleCourse.link}
                        controls={true}
                        width={'1024px'}
                        height={'480px'}
                        style={playerStyle}
                        onProgress={handleProgress}
                        onPause={handlePauseVideo}
                        onReady={handlePlayerReady}
                        ref={player}
                        config={{
                            enablejsapi: 1,
                            playerVars: { showinfo: 0 },
                            modestbranding: 1
                        }}
                    />
                        :
                    <div className='d-flex w-100 justify-content-center'>
                        <Title text='Видеофайл курса не доступен. Свяжитесь с администратором или напишите в чат.' color='red'/>
                    </div>}
                </div>

                {studiedCourse &&
                <>
                    <br/>
                    <ProgressBar progress={Math.round(progress*100)} borderRadius='2px'/>
                    <input type='range' min={0} max={1}
                           value={progress}
                           step='any'
                           onMouseUp={(e) => handleSeekMouseUp(e)}
                           onChange={(e) => setProgress(parseFloat(e.target.value))}
                           className='seekSlider'
                    />
                    <br/>
                    <Notes id={id} course={singleCourse} isVisibleButton={!!studiedCourse}/>
                </>
                }

                <hr/>
            </div>


            <div className='single-course-description-area'>
                <div className='d-flex flex-column'>
                    <Title text='ОПИСАНИЕ КУРСА' margin='10px' size='16px' weight={400}/>
                    <Title text={`Продолжительность: ${new Date(singleCourse.full_duration * 1000).toISOString().substr(11, 5)}`} margin={'0 0 0 10px'} size={'16px'} weight={300}/>
                    <Title text={`Количество уроков: ${singleCourse.lessons_qty}`} margin={'0 0 0 10px'} size='16px' weight={300}/>
                    <Title text={`Автор курса: ${singleCourse.author.name}`} margin={'0 0 0 10px'} size='16px' weight={300}/>
                    <Title text={singleCourse.description} margin='10px' size={'16px'} weight={300}/>
                </div>
                <div className='d-flex flex-column'>
                    <Title text='ЧЕМУ ВЫ НАУЧИТЕСЬ' margin={'10px'} size='16px' weight={400}/>
                    <Title text={singleCourse.what_will_learn} margin={'0 10px'} size={'16px'} weight={300}/>
                </div>
            </div>

            <WriteReview  user={user} reviews={reviewsByCourse}/>

            <div className='d-flex flex-column'>
                <Title text='ОТЗЫВЫ О КУРСЕ' margin='10px' size='16px' weight={400} textAlign='center'/>
                <hr/>
                <Reviews reviews={reviewsByCourse}/>
            </div>
        </div>
    )
}
