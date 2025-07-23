import { pool } from "../database/db.js";

export const getBlogs = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM blogs");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const getBlogById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query("SELECT * FROM blogs WHERE blog_id = $1", [id]);
        const selectedBlog = result.rows[0];
        res.send(selectedBlog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const addBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        await pool.query("INSERT INTO blogs (title, blog_content, author) VALUES ($1, $2, $3)", [title, content, author]);
        res.send("Blog has been added");
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const editBlog = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, content, author } = req.body;
        const result = await pool.query("UPDATE blogs SET title = $1, blog_content = $2, author = $3 WHERE blog_id = $4 RETURNING *", [
            title, content, author, id
        ]);
        const updatedBlog = result.rows[0];
        res.send(updatedBlog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const deleteBlog = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query("DELETE FROM blogs WHERE blog_id = $1", [id]);
        res.send(`Blog of id ${id} has been deleted`);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};