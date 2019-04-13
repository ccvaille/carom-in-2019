const Post = require('../models/post');

exports.new = async(req, res) => {
    try {
        const p = new Post(req.body);
        await p.save();
        res.json({
            _id: p._id,
            title: p.title,
            desc: p.desc
        })
    } catch (err) {
        console.log(err);
        return res.status(406).json({ msg: '保存失败' });
    }
}