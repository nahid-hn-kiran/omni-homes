import { useNavigate, useParams } from "react-router-dom";
import { articles } from "../../constants";
import Article from "./Article";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const SinglePost = () => {
  const { id } = useParams();
  const post = articles.find((article) => article.id == id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="single-post">
      <Helmet>
        <title>Omni Homes | {post.title}</title>
      </Helmet>
      <div className="container">
        <div className="post-top">
          <button
            onClick={goBack}
            className="omni-primary-btn d-flex align-items-center gap-2"
          >
            Go Back
            <FaArrowLeft />
          </button>
          <div className="article gap-top-45">
            <Article article={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
