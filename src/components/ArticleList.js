import React from "react";
import Article from "./Article";


function ArticleList({post})
{
    return (
        <main>
            {post.map(article=> <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes}/>)}
        </main>
    )
}

export default ArticleList;