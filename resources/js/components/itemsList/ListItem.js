import React from 'react';
import Image from "../images/Image";
import {Title} from "../titles/Title";
import StarRatings from "react-star-ratings";
import {Link} from "react-router-dom";
import {ProgressBar} from "../progress/ProgressBar";

export function ListItem({item, itemType = 'course'}){

    const avgRatingCourse = (reviews) =>{
        if (reviews.length < 1) return 0;
        let sum = 0;
        reviews.map((item) => {
            sum += item.rev_rating
        });
        return sum / reviews.length
    };

    const postRatings = () => {
        const likes = item.likes_count;
        const dislikes = item.dislikes_count;
        const percent = (likes || dislikes) && (likes * 100 / (likes + dislikes)).toFixed(0);
        return {likes, dislikes, percent}
    };


    const bonus = item.bonus ?
        <div className={'singleBadge'}>
            <img src="/images/icons/archive.png" alt="archive"/>
            <Title size={'14px'} weight={300} text={"Бонус"} margin={0}/>
        </div>
        :
        '';

    return(
        <div className='course-list-container'>
            <Link to={`/portal/${itemType}/${item.id}`} >
                <Image path={item.image} title={item.title}/>
            </Link>
            <div className={'badges'}>
                {item.full_duration &&
                <div className={'singleBadge'}>
                    <img src="/images/icons/Group 1.png" alt="clock"/>
                    <Title size={'14px'} weight={300} text={new Date(item.full_duration * 1000).toISOString().substr(11, 5)} margin={0}/>
                </div>}
                {item.lessons_qty &&
                <div className={'singleBadge'}>
                    <img src="/images/icons/file-video-outline 1.png" alt="file"/>
                    <Title size={'14px'} weight={300} text={'Уроков - ' + item.lessons_qty} margin={0}/>
                </div>}

                <div className={'singleBadge'}>
                    <img src="/images/icons/comment-account-outline 1.png" alt="review"/>
                    <Title size={'14px'} weight={300} text={'Отзывов - ' + (item.reviews ? item.reviews.length : item.comments_count)} margin={0}/>
                </div>
                {bonus && bonus}
                <div className={'singleBadge'}>
                    <img src="/images/icons/account-voice.png" alt="author"/>
                    <Title size={'14px'} weight={300} text={item.author.name} margin={0}/>
                </div>

            </div>

            <div className={'course-list-text-area'}>
                <Link to={`/portal/${itemType}/${item.id}`} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, .85)' }}>
                    <Title text={item.title.toUpperCase()} margin={'0 20px'} weight={400} size={'22px'} />
                </Link>
                <Title text={item.description} margin={'5px 0 0 20px'} weight={300} size={'18px'}/>

                {item.what_will_learn &&
                <>
                    <Title text={'Вы научитесь:'} margin={'5px 0 0 20px'} weight={400} size={'18px'}/>
                    <Title text={item.what_will_learn} margin={'0 20px'} weight={300} size={'16px'}/>
                </>
                }


                <div className={'course-list-rating'}>
                    {item.reviews ?
                    <>
                        <StarRatings
                            rating = {avgRatingCourse(item.reviews)}
                            starRatedColor = "#F38300"
                            starDimension = '25px'
                            starSpacing = '1px'
                            numberOfStars = {5}
                            name = 'rating'
                        />
                        <Title margin={'0 0 0 10px'} size={'16px'} weight={300} text={
                            `${avgRatingCourse(item.reviews).toFixed(1)} из 5 (${item.reviews ? item.reviews.length : 0})`
                        }/>
                    </>
                        :
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='d-flex w-100 justify-content-around mb-2'>
                            <i className="fas fa-thumbs-up text-success">
                                <Title text={` ${postRatings().likes}`} margin={0} weight={300}/>
                            </i>
                            <i className="fas fa-thumbs-down text-danger">
                                <Title text={` ${postRatings().dislikes}`} margin={0} weight={300}/>
                            </i>
                        </div>
                        <ProgressBar progress={postRatings().percent} height='10px' borderRadius='5px' color='#38c172' width='120px'/>
                    </div>
                    }
                </div>


            </div>
        </div>
    )
}


