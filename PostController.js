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

        } catch (e) {
            console.log(e)
        }
    }
    async update(req, res) {
        try {

        } catch (e) {
            console.log(e)
        }
    }
    async delete(req, res) {
        try {

        } catch (e) {
            console.log(e)
        }
    }
}

export default new PostController();