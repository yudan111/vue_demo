const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise'); // 使用 promise 版本

const app = express();
const port = 3000;

// 使用中间件
app.use(cors());
app.use(bodyParser.json());

// 创建 MySQL 连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // 替换为你的 MySQL 用户名
  password: '123456', // 替换为你的 MySQL 密码
  database: 'userdb'
});

// 注册新用户
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).send({ message: '用户名和密码不能为空' });
    }

    const [results] = await pool.query('SELECT * FROM users1 WHERE username = ?', [username]);
    if (results.length > 0) {
      return res.status(409).send({ message: '该用户名已被注册' });
    }

    const [result] = await pool.query(
      'INSERT INTO users1 (username, password) VALUES (?, ?)',
      [username, password]
    );
    res.status(201).send({ message: '注册成功', userId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: '服务器错误' });
  }
});

// 登录验证
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).send({ success: false, message: '用户名和密码不能为空' });
    }

    const [results] = await pool.query('SELECT * FROM users1 WHERE username = ? AND password = ?', [username, password]);
    if (results.length > 0) {
      const user = results[0];
      return res.status(200).send({
        success: true,
        isAdmin: user.admin === 1,
        username: user.username
      });
    } else {
      return res.status(401).send({ success: false, message: '用户名或密码错误' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: '服务器错误' });
  }
});

// 获取所有用户
app.get('/api/users', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT id, username,password, created_at, admin FROM users1');
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: '服务器错误' });
  }
});

// 创建新用户
app.post('/api/users', async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).send({ message: '用户名和密码不能为空' });
    }

    const [results] = await pool.query('SELECT * FROM users1 WHERE username = ?', [username]);
    if (results.length > 0) {
      return res.status(409).send({ message: '该用户名已被注册' });
    }

    const [result] = await pool.query(
      'INSERT INTO users1 (username, password) VALUES (?, ?)',
      [username, password]
    );
    res.status(201).json({ id: result.insertId, username });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: '服务器错误' });
  }
});

// 更新指定ID的用户
app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  let updateValues = [];
  let query = 'UPDATE users1 SET ';

  if (username) {
    query += 'username = ?, ';
    updateValues.push(username);
  }

  if (password) {
    query += 'password = ?, ';
    updateValues.push(password);
  }

  query = query.slice(0, -2); // 去掉多余的逗号和空格
  query += ' WHERE id = ?';
  updateValues.push(id);

  try {
    const [result] = await pool.query(query, updateValues);
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: '用户未找到' });
    }
    res.json({ id, ...req.body });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: '服务器错误' });
  }
});

// 删除指定ID的用户
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM users1 WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: '用户未找到' });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: '服务器错误' });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});