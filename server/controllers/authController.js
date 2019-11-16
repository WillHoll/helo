module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db');
    const {username, password} = req.body;
    const found = await db.find_username([username]);
    if (+found[0].count !==0) {
      return res.status(409).send({message: 'Username taken'});
    };
    const newUser_id = await db.register_user({username, password, profile_pic: `https://robohash.org/${username}`});
    req.session.user = {id: newUser_id[0].id, username, profile_pic: `https://robohash.org/${username}`};
    res.status(201).send({message: 'Logged in', user: req.session.user});
  },
  login: async (req, res) => {
    const db = req.app.get('db');
    const {username, password} =req.body;
    const found = await db.find_username([username]);
    if (+found[0].count === 0) {
      return res.status(401).send({message: 'username not found'});
    };
    const foundUser = await db.get_user([username])
    const {id, profile_pic} = foundUser[0];
    if (password !== foundUser[0].password) {
      return res.status(401).send({message: 'Password is incorrect'});
    };
    req.session.user = {id, username, profile_pic};
    res.status(200).send({message: 'Logged in', user: req.session.user});
  },
  refresh: async (req, res) => {
    const db = req.app.get('db');
    const {id} = req.session.user;
    const userInfo = await db.get_user_info([id]);
    const {username, profile_pic} = userInfo[0];
    const userStuff = {username, profile_pic};
    console.log(userStuff)
    res.status(200).send(userStuff);
  },
  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send({message: 'Logged out'})
  }
}