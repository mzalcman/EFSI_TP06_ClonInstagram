import Story from "../Story/story";
import "./Stories.css";

interface StoriesProps {
  usernames: string[];
  profileImages: string[];
}

function Stories({
  usernames,
  profileImages,
}: StoriesProps) {
  return (
    <div className="stories">
      {usernames.map((username, index) => (
        <Story
          key={index}
          username={username}
          image={profileImages[index]}
        />
      ))}
    </div>
  );
}

export default Stories;