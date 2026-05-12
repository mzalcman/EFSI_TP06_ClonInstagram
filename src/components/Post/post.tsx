import { useState } from "react";
import type { PostType } from "../../types/post";
import "./Post.css";

interface PostProps {
    post: PostType;
    onSelect: (post: PostType) => void;
}

function Post({ post, onSelect }: PostProps) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="post">
            <div className="post-header">
                <img
                    src={post.profileImage}
                    alt={post.username}
                />

                <h3>{post.username}</h3>
            </div>

            <img
                className="post-image"
                src={post.image}
                alt="cat"
                onClick={() => onSelect(post)}
            />

            <div className="post-content">
                <button onClick={() => setLiked(!liked)}>
                    {liked ? "❤️" : "🤍"}
                </button>

                <p>{liked ? post.likes + 1 : post.likes} likes</p>

                <p>
                    <strong>{post.username}</strong> {post.caption}
                </p>
            </div>
        </div>
    );
}

export default Post;