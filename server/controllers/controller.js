module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get('db');
    const {userposts, search} = req.query;
    const {userid} = req.params;
    if (userposts === 'true' && search !== '%%') {
      const filteredPosts = await db.title_search_posts([search]);
      return res.status(200).send(filteredPosts);
    };
    if (userposts === 'false' && search === '%%')  {
      const filteredposts = await db.nonUser_posts([userid]);
      return res.status(200).send(filteredposts);
    };
    if (userposts === 'false' && search !== '%%') {
      const filteredPosts = await db.nonUser_search_posts([userid, search]);
      return res.status(200).send(filteredPosts);
    };
    if (userposts === 'true' && search === '%%') {
      const allposts = await db.all_posts();
      return res.status(200).send(allposts);
    };
  },
  getPost: async (req, res) => {
    const db = req.app.get('db');
    const {postid} = req.params;
    const grabbedPost = await db.get_post([postid]);
    const {title, img, content, username, profile_pic} = grabbedPost[0]
    const post = {title, img, content, username, profile_pic}
    return res.status(200).send(post)
  },
  makePost: (req, res) => {
    const db = req.app.get('db');
    const {title, img, content} = req.body
    const {userid: author_id} = req.params
    db.make_post({title, img, content, author_id})
    .then(() => {
      res.sendStatus(201)
    })
    .catch(err => {
      res.status(500).send(err)
    })

  }
};