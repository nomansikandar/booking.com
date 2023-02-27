import './searchitem.css'
import React from 'react'

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/336492774.jpg?k=b424e90afe1885bc0fa75cb5e5a3cb5798a815033fb909c405105af927b47278&o=&hp=1" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Appartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free Airport taxi</span>
                <span className="siSubtitle">Studio Appartment with air conditioning</span>
                <span className="siFeatures">Entire studio - 1 bathroom 21m 1 full bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in the great price today!</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem