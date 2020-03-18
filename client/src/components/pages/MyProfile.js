import React, { useEffect, useState } from 'react';
import { useApiCallEffect } from '../../hooks/useApiCallEffect';
import { getProfile } from '../../fetch/listers';
import useRedirect from './../../hooks/useRedirect';




const MyProfile = () => {
    const [profile, updateProfile] = useState({})
    let faildAuth = useApiCallEffect(getProfile, updateProfile, []);
    const prompt = useRedirect(faildAuth);
    return (
        <div>
            <div className="gen-page">
                <div>
                    {Boolean(profile) && profile.toString()}
                    {prompt}
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
