import type { PostType } from "../../types/post";
import "./PostModal.css";

interface PostModalProps {
  post: PostType;
  onClose: () => void;
}

function PostModal({ post, onClose }: PostModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>

        <img src={post.image} alt="cat" />

        <div className="modal-content">
          <h2>{post.username}</h2>

          <p>{post.caption}</p>

          <p>{post.likes} likes</p>

          <div className="comments">
            <p>
              <strong>catfan:</strong> Amazing cat 😻
            </p>

            <p>
              <strong>kittylover:</strong> So cute!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;