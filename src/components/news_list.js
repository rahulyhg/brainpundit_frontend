import React from 'react';
import NewsListItem from "./news_list_item";

const NewsList = (props) => {

    const newsItems = props.articles.map((article) => {
            return (
               <NewsListItem 
               key={Math.random()} 
               article={article}/>
            );
        });
    return (
        <ul className="list-group">
        {newsItems}
        </ul>
    );
};

export default NewsList;