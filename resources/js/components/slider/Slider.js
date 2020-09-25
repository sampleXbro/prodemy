import React from 'react';
import SliderSlick from 'react-slick';
import {history} from "../../utils/history";

export const Slider = ({items, itemType ='course', softwareId}) => {

    function handleImageClick(id){
        history.push(`/portal/${itemType}/${id}`)
    }

    const slidesList = [];
    items
        .filter((item) => softwareId ? item.software_id === softwareId : item)
        .map((item) => {
            if(itemType === 'course'){
                const avgRtg = item.reviews.reduce((acc, curr) => {
                    return acc + curr.rev_rating;
                }, 0) / item.reviews.length;
                avgRtg >= 4 && slidesList.push(
                    <img
                        className='slide'
                        src={item.image}
                        onError={(e)=>{e.target.onerror = null; e.target.src='/images/no-image.png'}}
                        onClick={() => handleImageClick(item.id)}
                        alt={item.title}
                        key={item.id}
                    />)
            } else if(itemType === 'post'){
                const avgRtgPercent = item.dislikes_count / item.likes_count * 100;
                avgRtgPercent < 20 && slidesList.push(
                    <img
                        className='slide'
                        src={item.image}
                        onError={(e)=>{e.target.onerror = null; e.target.src='/images/no-image.png'}}
                        onClick={() => handleImageClick(item.id)}
                        alt={item.title}
                        key={item.id}
                    />
                    )
            }
            }
        );

    const settingsSlick = {
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        infinite: slidesList.length > 4,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <div className={'text-center dark-container'}>

            <SliderSlick {...settingsSlick}>
                {slidesList}
            </SliderSlick>
        </div>
    )
};
