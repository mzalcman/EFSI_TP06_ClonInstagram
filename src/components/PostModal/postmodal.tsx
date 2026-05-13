import { useState } from "react";
import type { PostType } from "../../types/post";
import { Heart, MessageCircle, Send, Bookmark, X, } from "lucide-react";
import "./PostModal.css";

interface PostModalProps {
  post: PostType;
  onClose: () => void;
}

function PostModal({
  post,
  onClose,
}: PostModalProps) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button
          className="close-button"
          onClick={onClose}
        >
          <X size={28} />
        </button>

        <img
          className="modal-image"
          src={post.image}
          alt="cat"
        />

        <div className="modal-content">
          <div className="modal-header">
            <img
              src={post.profileImage}
              alt={post.username}
            />

            <span>{post.username}</span>
          </div>

          <div className="modal-comments">
            <p>
              <strong>{post.username}</strong>{" "}
              {post.caption}
            </p>

            <p>
              <strong>catlover</strong> So cute 😻
            </p>

            <p>
              <strong>kittydaily</strong> Amazing photo
            </p>

            <p>
              <strong>fluffycat</strong> I love this
            </p>
          </div>

          <div className="modal-footer">
            <div className="modal-actions">
              <div className="left-actions">
                <button
                  className="icon-button"
                  onClick={() => setLiked(!liked)}>
                  <Heart
                    size={26}
                    fill={liked ? "black" : "none"} />
                </button>

                <MessageCircle size={26} />

                <Send size={26} />
              </div>

              <Bookmark size={26} />
            </div>

            <p className="modal-likes">
              {liked ? post.likes + 1 : post.likes} likes
            </p>

            <div className="add-comment">
              <input
                type="text"
                placeholder="Add a comment..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;