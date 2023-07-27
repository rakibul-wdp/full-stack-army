const Contact = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div>
      <input type="submit" value="Create New Contact" />
    </form>
  );
};

export default Contact;
