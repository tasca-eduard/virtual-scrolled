import dummyData from "./dummy-data/posts.json";
import Article from "./components/Article/Article";
import VirtualScrollCard from "./components/VirtualSrollWrappers/VirtualCard";

function App() {
  return (
    <div className="virtual-list">
      {dummyData.posts.map((post, index) => {
        return (
          <VirtualScrollCard key={post.title + index}>
            <Article article={post} />
          </VirtualScrollCard>
        )
      })}
    </div>
  );
}

export default App;
