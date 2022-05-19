
import rss from '@astrojs/rss';

let posts = await import.meta.glob('./posts/*.md');
posts = await Promise.all(Object.values(posts).map(it => it()));
posts = posts.sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf());

export const get = () => rss({
    title: 'James’ Blog',
    description: 'Ramblings from James Daniels',
    site: 'https://jamesdaniels.net',
    items: posts.map(post => ({
      description: post.frontmatter.description,
      link: post.url,
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.publishDate),
    })),
    customData: `<language>en-us</language>`,
});