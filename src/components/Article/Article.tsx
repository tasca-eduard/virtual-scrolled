export interface Article {
  title: string,
  description: string
}

interface Props {
  article: Article
}

export default function Article({
  article
}: Props) {
  return (
    <>
      <article className="card">
        <div className="content">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      </article>
      <div className="grid">
        <article className="card">
          <div className="content">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </article>
        <article className="card">
          <div className="content">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </article>
        <article className="card">
          <div className="content">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </article>
      </div>
      <div className="grid">
        <article className="card">
          <div className="content">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </article>
        <article className="card">
          <div className="content">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </article>
      </div>
    </>
  )
}