import React, { useState } from 'react';

const UserCard = ({ user }) => {
const [isLiked, setIsLiked] = useState(false);
const [isFollowed, setIsFollowed] = useState(false);

return (
    <div className="user-card">
        <div className="card-header">
        <div className="avatar">{user.name.charAt(0)}</div>
        <div className="user-info">
            <h3>{user.name}</h3>
            <span className="username">@{user.username}</span>
        </div>
        </div>
        <div className="card-body">
        <p>✉️ {user.email}</p>
        </div>
        <div className="actions">
        <button 
            className={`btn-action ${isLiked ? 'liked' : 'like'}`} 
            onClick={() => setIsLiked(!isLiked)}
        >
            {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>
        <button 
            className={`btn-action ${isFollowed ? 'followed' : 'follow'}`} 
            onClick={() => setIsFollowed(!isFollowed)}
        >
        {isFollowed ? '✔️ Following' : '➕ Follow'}
        </button>
    </div>
    </div>
    );
};

export default UserCard;