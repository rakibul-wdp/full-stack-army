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

  // sell multiple ticket
  bulkCreate() {

  }

  // return all tickets
  find() {

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