import React, { useEffect, useState } from 'react';
import { useApiCallEffect } from '../../hooks/useApiCallEffect';
import { getProfile } from '../../fetch/listers';

const MyProfile = () => {
    const [profile, updateProfile] = useState({})
    useApiCallEffect(getProfile, updateProfile, []);
    console.log(profile);
    return (
        <div>
            <div className="gen-page">
                <div>
                    {Boolean(profile) && profile.toString()}
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
