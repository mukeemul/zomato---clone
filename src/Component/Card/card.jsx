import React from 'react';

const BannerData = [
    {
        id: 1,
        imageAddress: 'https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp',
        name: 'McDonald',
        time: '32 min'
    },
    {
        id: 2,
        imageAddress: 'https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp',
        name: 'DominoPizza',
        time: '40 min'
    },
    {
        id: 3,
        imageAddress: 'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp',
        name: 'Burger King',
        time: '37 min'
    },
    {
        id: 4,
        imageAddress: 'https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp',
        name: 'Subway',
        time: '18 min'
    },
    {
        id: 5,
        imageAddress: 'https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp',
        name: 'Haldiram',
        time: '44 min'
    },
    {
        id: 6,
        imageAddress: 'https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp',
        name: 'KFC',
        time: '25 min'
    },
]

const BannerCard = () => {
    return (
        <>
            <div className="card-slider">
                <div className='card-title'>Top brands for you</div>
                <div className='card-crousel'>
                    {BannerData.map((user) => (
                        <div className='crousel-card1'>
                            <div className="crousel-img">
                                <img src={user.imageAddress} alt="Zomato" />
                            </div>
                            <div className="crousel-title">
                                {user.name}
                            </div>
                            <p>
                                {user.time}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='card-title'>Best Food in Delhi NCR</div>
        </>
    );
}

export default BannerCard;
