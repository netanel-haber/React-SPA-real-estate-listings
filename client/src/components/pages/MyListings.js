import React from 'react';
import ListsContainer from '../ListsContainer';
import getJwtBody from '../../utilities/getJwtBody';
import '../../styles/components/MyListings.scss'

const hebTitleForType = {
    forsale: "מכירה",
    rent: "השכרה",
    commercial: "דירות שותפים",
    roommates: "נדל\"ן מסחרי"
};


const MyListings = () => {
    const listerId = getJwtBody()?.payload?._id;
    return (
        <div className="MyListings">
            <div className="body__content">
                <div className="MyListings__title">
                    <h3>הנכסים שלי</h3>
                </div>
            </div>
            <ListsContainer lists={Object.keys(hebTitleForType).map(type =>
                [hebTitleForType[type], { listerId }, type])} />
        </div>
    );
}

export default MyListings;
