import Post from "./Post.js";

class PostService {
    async create(post) {
        const createdPost = await Post.create(post)
        return createdPost;
    }

    async getAll(req, res) {
        const posts = await Post.find()
        return posts
    }
    async getOne(id) {
        if (!id) {
            throw new Error('id не указан')
        }
        const post = await Post.findById(id);
        return post
    }
    async update(post) {
        if (!post._id) throw new Error('id не указан')
        const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatePost;
    }
    async delete(id) {
        if (!id) throw new Error('id не указан')
        const post = await Post.findByIdAndDelete(id)
        return post;
    }
}

export default new PostService()
