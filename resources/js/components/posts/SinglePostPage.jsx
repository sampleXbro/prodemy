import React, {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import ReactPlayer from 'react-player'
import {Title} from "../titles/Title";
import {
    deleteComment,
    dislikePost,
    getCommentsByPostId,
    getPostById,
    likePost, updateComment
} from "../../redux/actions/actionCreators";
import {Preloader} from "../courses/Preloader";
import {ProgressBar} from "../progress/ProgressBar";
import Image from "../images/Image";
import {momentTime} from "../../utils/momentTime";
import {WriteComment} from "./WriteComment";

export function SinglePostPage({user}){
    const {id} = useParams();
    const {currentPost, isLoading} = useSelector(store => store.postsReducer);
    const {comments} = useSelector(store => store.commentsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostById(id));
        dispatch(getCommentsByPostId(id));
        window.scrollTo(0, 0);
        document.title = 'prodemy - ' + currentPost.title
    }, []);

    if(currentPost.length < 1) return <Preloader/>;

    const wasSetLike = !!currentPost.likes.some((like) => (like.user_id === user.id && like.post_id === currentPost.id));
    const wasSetDislike = !!currentPost.dislikes.some((dislike) => (dislike.user_id === user.id && dislike.post_id === currentPost.id));

    const dynLikeStyle = {
        color: wasSetLike && '#3490dc'
    };

    const dynDislikeStyle = {
        color: wasSetDislike && '#3490dc'
    };

    const postRatings = () => {
        const likes = currentPost.likes.length;
        const dislikes = currentPost.dislikes.length;
        const percent = (likes || dislikes) && (likes * 100 / (likes + dislikes)).toFixed(0);
        return {likes, dislikes, percent}
    };

    const handleLikeClick = () => {
        dispatch(likePost(id))
    };
    const handleDislikeClick = () => {
        dispatch(dislikePost(id))
    };

    const handleEditComment = (e) => {
        const element = e.target.parentNode.parentNode.firstChild;
        element.contentEditable = true;
        element.style.width = '100%';
        element.style.height = '100%';
        element.style.backgroundColor = 'white';
        element.focus();
    };

    const handleCommentBlur = (e, id) => {
        const element = e.target;
        element.contentEditable = false;
        element.style.width = '';
        element.style.height = '';
        element.style.backgroundColor = '';
        dispatch(updateComment(id, {comment: element.innerText}))
    };

    const handleDeleteComment = (commentId) => {
        dispatch(deleteComment(commentId))
    };

    const commentsJsx = comments.map((comment) => {
        const time = comment.created_at === comment.updated_at
            ? momentTime(comment.created_at)
            : 'отредактирован ' + momentTime(comment.updated_at);
        return(
            <div className='comment-container' key={comment.id}>
                <div className='comment-avatar-area'>
                    <Image borderRadius='100%' size='50px' path={comment.author.avatar}/>
                    <Title text={comment.author.name} textAlign='center'/>
                </div>

                <div className='single-comment'>
                    <div className='d-flex justify-content-between' onBlur={(e) => handleCommentBlur(e, comment.id)}>
                        <Title text={comment.comment} weight={300} margin='0 20px 0 0'/>
                        <div className='d-flex flex-column'>
                            {comment.author.id === user.id &&
                            <>
                                <i onClick={() => handleDeleteComment(comment.id)} className="far fa-trash-alt delete-comment-button"/>
                                <i onClick={handleEditComment} className="far fa-edit edit-comment-button"/>
                            </>
                            }

                        </div>
                    </div>

                    <div className='d-flex align-self-end mt-auto'>
                        <Title text={time} weight={300} fontStyle='italic'/>
                    </div>
                </div>
            </div>
        )
    }).reverse();

    return (
        <div className='container-fluid single-course-container'>
            {isLoading && <Preloader/>}
            <Title text={currentPost.title.toUpperCase()} size='20px' textAlign='center'/>
            <div className='d-flex justify-content-center'>
                <Image path={currentPost.image} size='100%' margin='10px'/>
            </div>
            {ReactPlayer.canPlay(currentPost.video_link) &&
            <div className={'d-flex justify-content-center border border-primary'}>
                <ReactPlayer
                    url={currentPost.video_link}
                    controls={true}
                    width={'100%'}
                    height={'640px'}
                    style={{display: 'flex', flex: 1}}
                    config={{
                        enablejsapi: 1,
                        playerVars: { showinfo: 0 },
                        modestbranding: 1
                    }}
                />
            </div>
            }

            <Title text={currentPost.text} size='18px' weight={300}/>
            <div className='d-flex align-self-end flex-column align-items-center justify-content-center mb-2'>
                <div className='d-flex w-100 justify-content-around'>
                    <i className="fas fa-thumbs-up like-button" onClick={handleLikeClick} style={dynLikeStyle}>
                        <Title text={` ${postRatings().likes} `} margin={0} weight={300}/>
                    </i>
                    <i className="fas fa-thumbs-down dislike-button" onClick={handleDislikeClick} style={dynDislikeStyle}>
                        <Title text={` ${postRatings().dislikes} `} margin={0} weight={300}/>
                    </i>
                </div>
                <ProgressBar height='10px' progress={postRatings().percent} borderRadius='5px' width='120px' color='#38c172'/>
            </div>
            <WriteComment currentPost={currentPost} user={user}/>
            <hr/>
            <Title text='КОММЕНТАРИИ' size='18px' textAlign='center'/>
            {commentsJsx.length > 0 ? commentsJsx : <Title text='Комментариев ещё нет. Будьте первым!' size='18px' textAlign='center' weight={300}/>}
        </div>
    )
}
