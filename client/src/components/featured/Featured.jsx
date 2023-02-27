import './featured.css'
import React from 'react'

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/163329279.jpg?k=0ae2beeb88ea9c5ded4c6bf3509dd784daa92e7f87a53cfce34d5918bb7324be&o=&hp=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/72129444.jpg?k=0f3c66a6252334d307e37d1eba6ad83414e96bf094051e998ed44a6c65cf6d6a&o=&hp=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/202278350.jpg?k=6d3168ddfba2f82a2eadc8c42e09448ca8a2f9e7d5912abf4f8a2ba546b4c99d&o=&hp=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>533 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured