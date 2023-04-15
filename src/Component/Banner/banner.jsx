import React from 'react';
import '../CSS File/App.css';

const bannerData = [
    {
        id: 1,
        imageAddress: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
        name: 'Biryani'
    },
    {
        id: 2,
        imageAddress: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
        name: 'Rolls'
    },
    {
        id: 3,
        imageAddress: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
        name: 'Burger'
    },
    {
        id: 4,
        imageAddress: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
        name: 'Rolls'
    },
    {
        id: 5,
        imageAddress: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png',
        name: 'Cake'
    },
    {
        id: 6,
        imageAddress: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
        name: 'Chichen'
    },
]

const Banner = () => {
    return (
        <section>
            <div className='banner_title'>Inspiration for your first order</div>
            <div className='crousel'>
                {bannerData.map((user) => (
                    <div className='crousel-card'>
                        <img src={user.imageAddress} alt="Zomato" height='150px' />
                        <div className="crousel-title">
                            {user.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Banner;
