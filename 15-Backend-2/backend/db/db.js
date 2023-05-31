const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.ticket = [];
  }

  /**
   * create and save a new ticket
   * @param {string} username 
   * @param {number} price 
   * @returns {Ticket} return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.ticket.push(ticket);
    return ticket;
  }

  /**
   * create multiple ticket for a single user
   * @param {string} username 
   * @param {number} price 
   * @param {number} quantity 
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }

    return result;
  }

  /**
   * return all available tickets
   */
  find() {
    return this.tickets;
  }

  // single ticket
  findById() {

  }

  // update ticket info
  updateById() {

  }

  // delete ticket from db
  deleteById() {

  }

  draw() {

  }
}

const myDB = new MyDB();

module.exports = myDB;