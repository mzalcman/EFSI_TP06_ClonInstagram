import { useState } from "react";
import type { PostType } from "../../types/post";
import "./Post.css";
import { Heart, MessageCircle, Send, Bookmark, } from "lucide-react";

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
                <div className="post-actions">
                    <div className="left-icons">
                        <button onClick={() => setLiked(!liked)}>
                            <Heart
                                size={26}
                                fill={liked ? "black" : "none"}
                            />
                        </button>

                        <button>
                            <MessageCircle size={26} />
                        </button>

                        <button>
                            <Send size={26} />
                        </button>
                    </div>

                    <button>
                        <Bookmark size={26} />
                    </button>
                </div>

                <p className="likes">
                    {liked ? post.likes + 1 : post.likes} likes
                </p>

                <p className="caption">
                    <strong>{post.username}</strong> {post.caption}
                </p>
            </div>
        </div>
    );
}

export default Post;