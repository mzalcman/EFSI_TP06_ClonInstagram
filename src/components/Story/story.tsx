import "./Story.css";

interface StoryProps {
  username: string;
  image: string;
}

function Story({ username, image }: StoryProps) {
  return (
    <div className="story">
      <img src={image} alt={username} />

      <p>{username}</p>
    </div>
  );
}

export default Story;