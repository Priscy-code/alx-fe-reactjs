import React from 'react';
import UserInfo from './UserInfo';
import UserContext from './UserContext';

function ProfilePage() {
  return (
        <div>
      <h1>Profile</h1>
      <UserInfo />
      <UserContext/>
    </div>
  )
}

export default ProfilePage;