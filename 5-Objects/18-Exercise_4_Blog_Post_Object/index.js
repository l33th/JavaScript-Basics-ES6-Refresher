// Blog Post Object
// title
// body
// author
// views
// comments
//  (author, body)
// isLive

let blogPost = {
  title: 'Web Developer',
  body: 'Build Web Applications',
  author: 'VampinoV',
  views: 1000000,
  comments : [
    { author: 'VampinoV', body: 'Build Websites'},
    { author: 'Ghost', body: 'Hack Websites'},
  ],
  isLive: true
};

console.log(blogPost);