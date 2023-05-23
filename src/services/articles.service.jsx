import React from 'react';

const articles = [
	{
		id: 1,
		title: 'Hello world',
		content: (
			<p style={{ margin: 0 }}>
				<strong>Hello !</strong>
				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati molestiae architecto tempore natus fugiat quaerat. Deserunt voluptatem hic beatae totam quisquam nemo, veniam aliquam sed fugiat necessitatibus tenetur, nisi consequatur?</span>
			</p>
		)
	},
	{
		id: 2,
		title: 'Atomic React',
		content: (
			<p style={{ margin: 0 }}>
				<strong>A great way to learn React !</strong>
				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati molestiae architecto tempore natus fugiat quaerat. Deserunt voluptatem hic beatae totam quisquam nemo, veniam aliquam sed fugiat necessitatibus tenetur, nisi consequatur?</span>
			</p>
		)
	},
	{
		id: 3,
		title: 'The new doc',
		content: (
			<p style={{ margin: 0 }}>
				<strong>Check it out on <a href="https://react.dev" target="_blank" rel="noreferrer">react.dev</a>!</strong>
				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati molestiae architecto tempore natus fugiat quaerat. Deserunt voluptatem hic beatae totam quisquam nemo, veniam aliquam sed fugiat necessitatibus tenetur, nisi consequatur?</span>
			</p>
		)
	}
];

export const getArticles = () => articles.map(({ id, title }) => ({ id, title }));

export const getArticleById = (articleId) => new Promise((resolve, reject) => {
	setTimeout(() => {
		const foundArticle = articles.find(article => article.id === +articleId);
		if (!foundArticle) {
			return reject(`Article not found with id ${articleId}`);
		}
		resolve(foundArticle);
	}, 1000);
});