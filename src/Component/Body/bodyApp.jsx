import React from 'react';
import '../CSS File/App.css';
import { ZomatoData } from '../Config/data'
import { CiStar } from 'react-icons/ci';

const BodyApp = () => {

    return (
        <>
            {ZomatoData.map((props) => {
                return (
                    <div className="reduce">
                        <div className="explore-card" >
                            <div className="explore-options" key={props?.info?.id}>
                                <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props?.info?.cloudinaryImageId}`} alt="Zomato" />
                                <div className="delivery-time">{props?.info?.sla?.slaString}</div>
                                <div className="offer">{props?.info.aggregatedDiscountInfoV2.header}</div>
                                <div>
                                    <div className="exp-row">
                                        <div className="exp-name">{props?.info?.areaName}</div>
                                        <div className="exp-rating">{props?.info?.avgRating} <CiStar className='star' /></div>
                                    </div>
                                    <div className="exp-title">
                                        <div className="exp-cuisines">{props?.info?.cuisines.join()} </div>
                                        <div className="exp-price">{props?.info?.costForTwo}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="exp-separator"></div>
                                    <div className="exp-bottom">
                                        <img className='img1' src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
                                            alt='Loading' />
                                        <div className="bottom-text">2850+ orders placed from here recently</div>
                                        <img className='img2' src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp"
                                            alt='Loading' />
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                );
            })}
        </>
    );
}


export default BodyApp;
