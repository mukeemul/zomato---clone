import React from 'react';
import '../CSS File/App.css'
import { CiLocationOn } from 'react-icons/ci';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsSearch, BsChevronDown, BsFilter } from 'react-icons/bs';



const Navbar = () => {
  return (
    <>
      <div className='header'>
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato Logo" />
        <div className="middle-section">
          <div className="searchbar">
            <div className="location-wrapper">
              <div className="location-icon">
                <CiLocationOn />
              </div>
              <div className='loc-add'>Shaheen Bagh, New Dehli</div>
              <div className="caret">
                <AiFillCaretDown />
              </div>
              <div className="location-seprator"></div>
              <div className="header-searchbar">
                <BsSearch className='header-search-icon' />
                <input placeholder='Search for restaurant...' className='input-search' />
              </div>
            </div>
          </div>
          <div className="profile-wrapper">
            <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" alt='Zomato' />
            <span className='profile-username'>Mukeemul Haque</span>
            <BsChevronDown />
          </div>
        </div>
      </div>
      <div className='optoins-wrapper'>
        <div className="option">
          <div className="tap-option">
            <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" alt="Delivery" />
          </div>
          <span>Delivery</span>
          <div className="tap-option">
            <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" alt="Dining Out" />
          </div>
          <span>Dining Out</span>
          <div className="tap-option">
            <img src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" alt="Nightlife" />
          </div>
          <span>Nightlife</span>
        </div>
      </div>
      <div className="filter-wrapper">
        <div className="filter-buttons">
          <button className='btn'>
            <BsFilter className='filter-btn' />Filters
          </button>
          <button className='btn'>
            Rating : 4.0+
          </button>
          <button className='btn'>
            Pure Veg
          </button>
          <button className='btn'>
            Cuisine <BsChevronDown />
          </button>
          <button className='btn1'>
            More filters <BsChevronDown />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

