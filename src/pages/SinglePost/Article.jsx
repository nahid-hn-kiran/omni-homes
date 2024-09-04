import PropTypes from "prop-types";

const Article = (props) => {
  const { title, img, description, article } = props.article;
  return (
    <article>
      <div className="card-side py-50">
        <div className="container">
          <div className="row row-cols-1 gy-4 row-cols-md-2 align-items-center">
            <div className="col">
              <h2 className="section-title card-side-title">
                {title && title}
              </h2>
              <p className="common-text gap-top-20">
                {description && description}
              </p>
            </div>
            <div className="col omni-card-thumbnail">
              <img src={img} alt={title} />
            </div>
          </div>
        </div>
      </div>
      <p className="common-text">{article}</p>
    </article>
  );
};

Article.propTypes = {
  article: PropTypes.object,
  article2: PropTypes.object,
};

export default Article;
