import type { PostType } from "../../types/post";
import user from "../../data/user";

import { Settings } from "lucide-react";

import "./Profile.css";

interface ProfileProps {
  posts: PostType[];
  onSelect: (post: PostType) => void;
}

function Profile({ posts, onSelect }: ProfileProps) {
  return (
    <div className="profile">
      <div className="profile-top">
        <div className="profile-image-container">
          <img
            className="profile-avatar"
            src={user.avatar}
            alt="avatar"
          />
        </div>

        <div className="profile-info">
          <div className="profile-header">
            <h2>{user.username}</h2>

            <button className="edit-button">
              Edit Profile
            </button>

            <button className="settings-button">
              <Settings size={24} />
            </button>
          </div>

          <div className="stats">
            <span>
              <strong>{user.posts}</strong> posts
            </span>

            <span>
              <strong>{user.followers}</strong> followers
            </span>

            <span>
              <strong>{user.following}</strong> following
            </span>
          </div>

          <div className="bio">
            <h4>Cat Lover 🐱</h4>

            <p>{user.bio}</p>
          </div>
        </div>
      </div>

      <div className="profile-grid">
        {posts.map((post) => (
          <img
            key={post.id}
            src={post.image}
            alt="cat"
            onClick={() => onSelect(post)}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;