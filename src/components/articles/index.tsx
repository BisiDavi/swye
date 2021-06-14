import React, { FC } from 'react';
import Article from './article';

const Articles: FC<ArticleProps> = ({ data }) => {
    return data.map((item, index) => <Article data={item} key={index} />);
};

type dataType = {
    image?: string;
    title: string;
    brand?: string;
    description: string;
    impact: string[];
    inverted?: boolean;
};
interface ArticleProps {
    data: dataType[];
}

export default Articles;
