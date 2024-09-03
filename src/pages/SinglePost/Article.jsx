const Article = (props) => {
  const { title, img, description, article } = props?.article;
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

      <div className="card-side py-50 pt-100">
        <div className="container">
          <div className="row row-cols-1 gy-4 row-cols-md-2 align-items-center">
            <div className="col">
              <h2 className="section-title card-side-title">
                {props.article2?.title}
              </h2>
              <p className="common-text gap-top-20">
                {props.article2?.description}
              </p>
            </div>
            <div className="col omni-card-thumbnail">
              <img src={props.article2?.img} alt={props.article2?.img} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
