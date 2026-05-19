import Post from "../Post/post";
import type { PostType } from "../../types/post";
import "./Feed.css";
import Stories from "../Stories/stories";

// Define los elementos que se van a mostrar en el feed
interface FeedProps {
    posts: PostType[];
    onSelect: (post: PostType) => void;
    usernames: string[];
    profileImages: string[];
}

function Feed({
    posts,
    onSelect,
    usernames,
    profileImages,
}: FeedProps) {
    return (
        <div className="feed">
            <Stories
                usernames={usernames}
                profileImages={profileImages}
            />

            {posts.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
}

export default Feed;