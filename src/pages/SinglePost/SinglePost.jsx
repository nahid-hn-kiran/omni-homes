import { articles } from "../../constants";
import Article from "./Article";

const SinglePost = () => {
  const post = articles[0];
  const post2 = articles[1];
  return (
    <div className="single-post">
      <div className="container">
        <div className="post-top">
          <div className="article gap-top-45">
            <Article article2={post2} article={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
