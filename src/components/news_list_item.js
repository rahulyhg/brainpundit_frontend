import React from 'react';
import '../components/news_list_item.css';
const NewsListItem = ({article}) => {
    return (
        <div className="card container margin-auto CardBoxShadow">
            <a href={article.url} target="_blank">
                <img className="NewsImg responsive-img media-left col-sm-6 " src={article.urlToImage} alt="Image Not available"/>
                <div className="card-body col-sm-6 ContentPadding">
                    <h2 className="card-title">{article.title}</h2>
                    <p className="card-text">{article.description}</p>
                </div>
            </a>
        </div>
    );
}

export default NewsListItem;