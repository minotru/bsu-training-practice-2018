(function () {
    function isString(s) {
        return typeof s === "string" || s instanceof String;
    }

    class PhotoPost {
        /**
         * @param {String} description 
         * @param {Date} createdAt 
         * @param {String} author 
         * @param {String} photoLink 
         * @param {[String]} tags 
         * @param {[String]} likes
         */
        constructor({description, createdAt, author, photoLink, tags = [], likes = []}) {
            this.id = PhotoPost.nextId();
            this.description = description;
            this.createdAt = createdAt;
            this.author = author;
            this.photoLink = photoLink;
            this.tags = tags;
            this.likes = likes;
        }

        getLikesCnt() {
            return this.likes.length;
        }

        /**
         * Like this post. Calling twice with same userName wont give changes. 
         * @param {String} userName User who liked this post.
         */
        like(userName) {
            if(this.likes.indexOf(userName) === -1)
                this.likes.push(userName);
        } 

         /**
         * Dislike this post. Calling twice with same userName wont give changes. 
         * @param {String} userName User who liked this post.
         */
        dislike(userName) {
            const ind = this.likes.indexOf(userName);
            if (ind !== -1)
                this.likes.splice(ind, 1);
        }

        static nextId() {
            let id = 0;
            this.nextId = () => (id++).toString();
            return this.nextId();
        }

        /**
         * @param {PhotoPost} post 
         */
        static validate(post) {
            return (
                post instanceof PhotoPost && 
                isString(post.id) && 
                isString(post.description) && post.description.length < 200 &&
                (post.createdAt instanceof Date) && 
                isString(post.author) && post.author.length > 0 &&
                isString(post.photoLink) && post.photoLink.length > 0 &&
                post.tags instanceof Array && 
                post.likes instanceof Array
            );
        }
    }

    class PhotoPosts {
        constructor() {
            this.photoPosts = [];
            this.isSorted = true;
        }


        /**
         * @param {number} skip 
         * @param {number} top 
         * @param {{author? : String, fromDate? : Date, toDate? : Date, tags? : [String]}} filterConfig 
         * @returns {[PhotoPost]}
         */
        getPhotoPosts(skip = 0, top = 10, filterConfig) {
            if (!this.isSorted) {
                this.photoPosts.sort((p1, p2) => p1.createdAt < p2.createdAt);
                this.isSorted = true;
            }
            const result = [];
            for (let i = skip; i < Math.min(this.photoPosts.length, skip + top); i++) {
                let isGood = true;
                const post = this.photoPosts[i];
                if (filterConfig) {
                    if (filterConfig.author && post.author !== filterConfig.author)
                        isGood = false;
                    if (filterConfig.fromDate && post.createdAt < filterConfig.fromDate)
                        isGood = false;
                    if (filterConfig.toDate && post.createdAt > filterConfig.toDate)
                        isGood = false;
                    if (filterConfig.tags && !filterConfig.tags.every(tag => post.tags.indexOf(tag) !== -1))
                        isGood = false;
                }
                if (isGood)
                    result.push(post);
            }
            return result;
        }

        /**
         * @param {PhotoPost} post 
         * @returns {Boolean} success / failure
         */
        addPhotoPost(post) {
            if (!PhotoPost.validate(post))
                return false;
            this.photoPosts.push(post);
            this.isSorted = false;
            return true;
        }

        getPhotoPostsCnt() {
            return this.photoPosts.length;
        }

        /**
         * @param {String} id 
         * @returns {PhotoPost | null} Returns post with such id or null if not found.
         */
        getPhotoPost(id) {
            return this.photoPosts.find(post => post.id === id) || null;
        }

        /**
         * @returns {Boolean} success / failure
         */
        editPhotoPost(id, {description, tags, photoLink}) {
            const ind = this.photoPosts.findIndex(post => post.id === id);
            if (ind == -1)
                return false;
            const editedPost = Object.assign(new PhotoPost({}), this.photoPosts[ind]);
            if (typeof photoLink !== "undefined")
                editedPost.photoLink = photoLink;
            if (tags)
                editedPost.tags = tags;
            if (typeof description !== "undefined")
                editedPost.description = description;
            if (!PhotoPost.validate(editedPost))
                return false;
            this.photoPosts[ind] = editedPost;
            return true;        
        }

        /**
         * @param {String} id 
         * @returns {Boolean} success / failure
         */
        removePhotoPost(id) {
            const ind = this.photoPosts.findIndex(post => post.id === id);
            if (ind === -1)
                return false;
            this.photoPosts.splice(ind, 1);
            return true;
        }
    }

    window.PhotoPost = PhotoPost;
    window.PhotoPosts = PhotoPosts;
})();

(function test() {
    const postsData = [
        {
            author: "Simon Karasik",
            description: "post #1",
            createdAt: new Date(),
            photoLink: "http://google.com",
        },
        {
            author: "Alex Mukharski",
            description: "post #2",
            createdAt: new Date(2018, 0, 0),
            photoLink: "http://google.by",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            author: "Alex Kovalchuk",
            description: "post #3",
            createdAt: new Date(2017, 0, 5),
            photoLink: "http://google.ru",
            tags: ["hello", "it's", "me", "tag2"]
        }
    ].map(postData => new PhotoPost(postData));
    const badPostsData = [
        {
            author: "Bad man",
            description: null,
            createdAt: "never",
        }, 
        {
            author: "Even worse man",
        }
    ].map(postData => new PhotoPost(postData));


    console.log("PhotoPost");
    console.log("#validate");
    console.log("Post should be valid(true):", PhotoPost.validate(postsData[0]));
    console.log("Post should be invalid(false):", PhotoPost.validate(badPostsData[0]));
    console.log();
    
    let photoPosts = new PhotoPosts();
    console.log("PhotoPosts");
    console.log("#addPhotoPost(post)");
    console.log("Add valid post(true)", photoPosts.addPhotoPost(postsData[0]));
    console.log("Add invalid post(false)", photoPosts.addPhotoPost(badPostsData[0]));
    console.log();
    console.log("#like");
    console.log("like post:");
    const examplePost = new PhotoPost({author: "Arnold", description: "In USA", photoLink: "http", createdAt: new Date()});
    examplePost.like("Simon Karasik");
    console.log(examplePost);
    console.log("#dislike");
    examplePost.dislike("Simon Karasik");
    console.log(examplePost);

    console.log("#getPhotoPosts(skip, top, filterOptions)");
    photoPosts = new PhotoPosts();
    postsData.forEach(post => photoPosts.addPhotoPost(post));
    console.log("getPhotoPosts()");
    console.log(photoPosts.getPhotoPosts());
    console.log("getPhotoPosts(0, 0)");
    console.log(photoPosts.getPhotoPosts(0, 0));
    console.log("getPhotoPosts(1, 2)");
    console.log(photoPosts.getPhotoPosts(1, 2));
    console.log("getPhotoPosts(0, 0, {tags: ['tag2']})");
    console.log(photoPosts.getPhotoPosts(0, 10, {tags:["tag2"]}));
    console.log("getPhotoPosts(100, 1000)");
    console.log(photoPosts.getPhotoPosts(100, 1000));
    console.log();

    console.log("#getPhotoPost(id)");
    console.log("getPhotoPost('2')");
    console.log(photoPosts.getPhotoPost("2"));
    console.log("getPhotoPost('666') (should return null)");
    console.log(photoPosts.getPhotoPost("666"));
    console.log();

    console.log("#editPhotoPost(id, {description, tags, photoLink})");
    console.log("no post with such id (false): ", photoPosts.editPhotoPost("666", {}));
    console.log("photoLink is empty (false): ", photoPosts.editPhotoPost("1", {photoLink: ""}));
    console.log("description is too long (false): ",
    photoPosts.editPhotoPost("1", {description: new String().padStart(300, "hello")}));
    console.log("valid data (true): ",
        photoPosts.editPhotoPost("1", {tags: ["newTag1", "newTag2"], description: "edit it!"}));
    console.log("after editing: ");
    console.log(photoPosts.getPhotoPosts(0, 10));
    console.log();

    console.log("#removePhotoPost(id)");
    console.log("no such id(false): ", photoPosts.removePhotoPost("666"));
    console.log("post removed(true): ", photoPosts.removePhotoPost("1"));
    console.log("after removing:");
    console.log(photoPosts.getPhotoPosts(0, 10));
})();
