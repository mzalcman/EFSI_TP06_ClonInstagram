import type { PostType } from "../../types/post";
import user from "../../data/user";
import "./Profile.css";

interface ProfileProps {
  posts: PostType[];
  onSelect: (post: PostType) => void;
}

function Profile({ posts, onSelect }: ProfileProps) {
  return (
    <div className="profile">
      <div className="profile-header">
        <img src={user.avatar} alt="avatar" />

        <div>
          <h2>{user.username}</h2>

          <p>{user.bio}</p>

          <div className="stats">
            <span>{user.posts} posts</span>
            <span>{user.followers} followers</span>
            <span>{user.following} following</span>
          </div>

          <button>Edit Profile</button>
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