// If the function is part of an object, we call that function a method
// 'this' references that object itself
// If that function is a regular function, which means it's not part of an object,
// then 'this' references the global object, which is the window object in browsers
// and global in node

const video = {
    title: 'Harry Potter',
    tags: ['one', 'two', 'three'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();