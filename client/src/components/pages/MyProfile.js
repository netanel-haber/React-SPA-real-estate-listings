import React from 'react';
import ListsContainer from './../ListsContainer';
import getJwtBody from './../../utilities/getJwtBody';

const hebTitleForType = {
    forsale: "מכירה",
    rent: "השכרה",
    commercial: "דירות שותפים",
    roommates: "נדל\"ן מסחרי"
};


const MyProfile = () => {
    const listerId = getJwtBody()?.payload?._id;
    return (
        <div>
            <ListsContainer lists={Object.keys(hebTitleForType).map(type =>
                [hebTitleForType[type], { listerId }, type])} />
        </div>
    );
}

export default MyProfile;
