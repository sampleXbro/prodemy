import React from 'react';
import PropTypes from "prop-types";
import {Title} from "../../components/titles/Title";
import StarRatings from "react-star-ratings";
import {momentTime} from "../../utils/momentTime";

export function Reviews({reviews}){

    if(!reviews || !reviews.length) {
        return <Title size={'18px'} weight={300} text={'Здесь пока нет отзывов. Будьте первым!'} margin={'0 20px'}/>;
    }

    const reviewsJsx = reviews.map((review) => (
            <div key={review.id} className={'single-review'}>
                <Title size={'18px'} weight={400} text={review.author.name} margin={'10px 0 0 15px'} textAlign={'left'}/>
                <Title size={'16px'} weight={300} text={review.review} margin={'0 0 10px 15px'} fontStyle={'italic'}/>
                <div className={'course-list-rating'}>
                    <Title size={'14px'} weight={300} text={momentTime(review.created_at)} margin={'0 20px 0 0'} fontStyle={'italic'}/>
                    <StarRatings
                    rating = {review.rev_rating}
                    starRatedColor = "#F38300"
                    starDimension = '18px'
                    starSpacing = '1px'
                    numberOfStars = {5}
                    name = 'rating'
                    />
                    <Title size={'14px'} weight={300} text={`${review.rev_rating} из 5`} margin={'0 0 0 10px'} fontStyle={'italic'}/>
                </div>
            </div>
        )
    );

    return (
        <div>
            {reviewsJsx.reverse()}
        </div>
    )
}

Reviews.propTypes = {
    reviews: PropTypes.array,
};
