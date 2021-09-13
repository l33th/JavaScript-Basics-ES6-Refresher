// let blogPost = {
//   title: 'Web Developer',
//   body: 'Build Web Applications',
//   author: 'VampinoV',
//   views: 1000000,
//   comments : [
//     { author: 'VampinoV', body: 'Build Websites'},
//     { author: 'Ghost', body: 'Hack Websites'},
//   ],
//   isLive: true
// };

// console.log(blogPost);

let post = new Post('Web Developer', 'Build Web Applications', 'VampinoV')

console.log(post);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 1000000;
  this.comments = [];
  this.isLive = false;
}

