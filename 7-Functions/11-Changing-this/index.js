const video = {
    title: 'Harry Potter',
    tags: ['one', 'two', 'three'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();

// function playVideo(a, b) {
//     console.log(this);
// }
//
// playVideo.call({ name: 'DVLPR'}, 1, 2);
// playVideo.apply({ name: 'HKR'}, [1, 2]);
//
// playVideo.bind({ name: 'PHLNTHRPY'})();
//
// playVideo();