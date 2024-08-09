import React from 'react';
import './Profile.css';
import Card from '../../components/card/card';


const Profile = () => {
    return (
       <div className='bgcimg'>
       <div className="profile-container">
            <div className="profile-header">
                <img src="hbo.jpg" alt="HBO Logo" className="profile-logo" /> 
                <h2>@hbo</h2>
            </div>
          <Card />

        </div>
        </div>
    );
};

export default Profile;
