module.exports = {
  getPosts: async (req, res) => {

    const db = req.app.get('db');
    const {userposts, search} = req.query;
    const {userid} = req.params;
    console.log(req.query)
    if (userposts === 'true' && search !== '') {
      console.log('true, true')
      const filteredPosts = await db.title_search_posts([search]);
      return res.status(200).send(filteredPosts);
    }
    if (!userposts === 'false' && search === '')  {
      console.log('false, false')

      const filteredposts = await db.nonUser_posts([userid]);
      return res.status(200).send(filteredposts);
    }
    if (!userposts === 'false' && search !== '') {
      console.log('false, true')
      console.log(req.query)
      const filteredPosts = await db.nonUser_search_posts([userid, search]);
      return res.status(200).send(filteredPosts);
    }
    if (userposts === 'true' && search === '') {
      console.log('true, false')
      const allposts = await db.all_posts();
      return res.status(200).send(allposts)
    }
  }
};