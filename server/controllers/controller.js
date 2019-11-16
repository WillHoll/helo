module.exports = {
  getPosts: async (req, res) => {

    const db = req.app.get('db');
    const {userposts, search} = req.query;
    const {userid} = req.params;
    if (userposts === 'true' && search !== '%%') {
      const filteredPosts = await db.title_search_posts([search]);
      return res.status(200).send(filteredPosts);
    }
    if (userposts === 'false' && search === '%%')  {
      const filteredposts = await db.nonUser_posts([userid]);
      return res.status(200).send(filteredposts);
    }
    if (userposts === 'false' && search !== '%%') {
      const filteredPosts = await db.nonUser_search_posts([userid, search]);
      return res.status(200).send(filteredPosts);
    }
    if (userposts === 'true' && search === '%%') {
      const allposts = await db.all_posts();
      return res.status(200).send(allposts)
    }
  }
};