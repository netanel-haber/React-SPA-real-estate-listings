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

const { HEB_MESSAGE = (name) => `שלום ${name}! להלן הנכסים שלך:` } = {};


const MyListings = () => {
    const { _id, name } = getJwtBody();
    return (
        <div className="MyListings">
            <div className="body__content" >
                <div className="MyListings__title">
                    <h3>{HEB_MESSAGE(name)}</h3>
                </div>
            </div>
            <ListsContainer lists={Object.keys(hebTitleForType).map(type =>
                [hebTitleForType[type], { listerId: _id }, type])} />
        </div>
    );
}

export default MyListings;
