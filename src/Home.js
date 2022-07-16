import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Bitcoin Standard: The Decentralized Alternative to Central Banking"
            image="https://m.media-amazon.com/images/I/81gcXeUeOFL._AC_UY218_.jpg"
            price={19.99}
            rating={5}
          />
          <Product
            id="2"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
            image="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UL320_.jpg"
            price={7.18}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3
            "
            title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
            image="https://m.media-amazon.com/images/I/71F4+7rk2eL._AC_UY218_.jpg"
            price={28.0}
            rating={5}
          />
          <Product
            id="4"
            title="The Richest Man in Babylon: Original 1926 Edition"
            image="https://m.media-amazon.com/images/I/71Rki45q6GL._AC_UY218_.jpg"
            price={6.99}
            rating={5}
          />
          <Product
            id="5"
            title="The Price of Tomorrow: Why Deflation Is the Key to an Abundant Future"
            image="https://m.media-amazon.com/images/I/71ebE8wPiuL._AC_UY218_.jpg"
            price={5}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Principles for Dealing with the Changing World Order: Why Nations Succeed and Fail"
            image="https://m.media-amazon.com/images/I/61R4llNQbkL._AC_UY218_.jpg"
            price={35.0}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
