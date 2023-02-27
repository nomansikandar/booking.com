import './propertyList.css'
import React from 'react'

const PropertyList = () => {
    return (
        <div className='pList'>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/369467073.jpg?k=05630710f868edfc23a7339356985e5d3c736c920ddd29e0e6067d1002bd242c&o=&hp=1" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/4778060.jpg?k=21449b8550f2420d0bf9a061f94ac13b5da7eab6a89bdeace0d70488089833a5&o=&hp=1" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Appartments</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/304422835.jpg?k=e999f32446e5c758d97740256e19c448dc1b0ec00e3d98cd3cda6b086f094f6a&o=&hp=1" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>824 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/300586953.jpg?k=ad675d64eea02547b3c5137adfb6adbbec5fe4fcad1153651849dd353960210e&o=&hp=1" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>792 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/335662262.jpg?k=b8d63f698ec83c17b7e07ea255ad79a1cf46bb0ab38d5419bc37794cb414e08d&o=&hp=1" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>152 hotels</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList