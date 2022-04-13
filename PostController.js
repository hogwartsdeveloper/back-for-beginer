import Post from "./Post.js";

class PostController {
    async create(req, res) {
        try {
            const { author, title, content, picture } = req.body
            const post = await Post.create({author, title, content, picture})
            res.json(post)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find()
            return res.json(posts);
        } catch (e) {
            console.log(e)
        }
    }
    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) res.status(400).json({message: 'id не указан'})
            const post = await Post.findById(id);
            return res.json(post)
        } catch (e) {
            console.log(e)
        }
    }
    async update(req, res) {
        try {
            const post = req.body
            if (!post._id) res.status(400).json({message: 'id не указан'})

            const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return res.json(updatePost);
        } catch (e) {
            console.log(e)
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) res.status(400).json({message: 'id не указан'})
            const post = await Post.findByIdAndDelete(id)
            return res.json(post);
        } catch (e) {
            console.log(e)
        }
    }
}

export default new PostController();
