import { useParams } from "react-router-dom";
import { articles } from "../../constants";
import Article from "./Article";

const SinglePost = () => {
  const { id } = useParams();
  const post = articles.find((article) => article.id == id);
  return (
    <div className="single-post">
      <div className="container">
        <div className="post-top">
          <div className="article gap-top-45">
            <Article article={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
