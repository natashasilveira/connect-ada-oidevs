const Comment = require("./Comment.class");
const Post = require("./Post.class");
const User = require("./User.class");

class DataBase {
  #users;
  #posts;
  #comments;

  constructor() {
    this.#users = [];
    this.#posts = [];
    this.#comments = [];
  }

  get users() {
    return this.#users;
  }

  get posts() {
    return this.#posts;
  }

  get comments() {
    return this.#comments;
  }
  
  addUser(name, password, email) {
  const user = new User(name, password, email)
    // new User(user.name, user.password, user.email)
    // const user = {
    //   idUser: user.idUser,
    //   name: user.name,
    //   password: user.password,
    //   email: user.email,
    //   followList: user.followList
    // };
    this.#users.push(user);
    return user
  }

  addPost(idUser, title, content) {
    const post = new Post(idUser, title, content);
    this.#posts.push(post);
  }

  removePost(idPost) {
    const index = this.#posts.findIndex((element) => element.idPost === idPost);
    this.#posts.splice(index, 1);
  }

  addComment(idAuthor, idPost, content) {
    const comment = new Comment(idAuthor, idPost, content);
    this.#comments.push(comment);
  }

  removeComment(idComment) {
    const index = this.#comments.findIndex(
      (element) => element.idComment === idComment
    );
    this.#comments.splice(index, 1);
  }

//editando e update o usuário

  updateUser(user){
    const userUpdated = {
      idUser: user.idUser,
      name: user.name,
      password: user.password,
      email: user.email,
      followList: user.followList
    };
    this.#users.push(userUpdated);
  }
}
//o problema dessa função é que os atributos estão ficando públicos, não estamos excluindo o usuario anterior e não estamos criando um novo a partir da classe User
//updateUser precisa trazer o qlqr atributo atualizado

module.exports = DataBase;
