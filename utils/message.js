class Message {
  constructor(name, content, id, type= 'text') {
    this.name = name;
    this.content = content;
    this.id = id;
    this.time = new Date().toString().slice(15, 24);
    this.type = type;
  }
}

module.exports = () => {
  return Message
}