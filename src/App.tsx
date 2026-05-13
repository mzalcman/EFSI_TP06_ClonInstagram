import { useEffect, useState } from "react";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Feed from "./components/Feed/feed";
import Profile from "./components/Profile/profile";
import PostModal from "./components/PostModal/postmodal";
import { getCats } from "./services/api";
import type { PostType } from "./types/post";
import "./index.css";

const usernames = [
  "catlover",
  "kittydaily",
  "meowworld",
  "fluffycat",
  "sleepycat",
  "catfannn",
  "hellokitty",
  "beatufullcat",
  "shycatt",
  "cat0382"
];

const captions = [
  "Living my best cat life",
  "Nap time all day",
  "Too cute to handle",
  "Cats make everything better",
  "Just chilling",
  "Living my best cat life",
  "Cat time all day",
  "Too beautifull to handle",
  "Cats make everything so beauty",
  "Just be you"
];

const profileImages = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=10"
];

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const [view, setView] = useState<"feed" | "profile">(
    "feed"
  );

  const [selectedPost, setSelectedPost] =
    useState<PostType | null>(null);

  useEffect(() => {
    const fetchCats = async () => {
      const data = await getCats();

      const formattedPosts = data.map(
        (cat: any, index: number) => ({
          id: cat.id,
          image: cat.url,
          username: usernames[index],
          likes: Math.floor(Math.random() * 1000),
          caption: captions[index],
          profileImage: profileImages[index],
        })
      );

      setPosts(formattedPosts);
    };

    fetchCats();
  }, []);

  return (
    <div>
      <Header />

      <Navbar setView={setView} />

      {view === "feed" ? (
        <Feed
          posts={posts}
          onSelect={setSelectedPost}
          usernames={usernames}
          profileImages={profileImages}
        />
      ) : (
        <Profile
          posts={posts}
          onSelect={setSelectedPost}
        />
      )}

      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
}

export default App;