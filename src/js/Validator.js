class Validator {
  validateUsername(username) {
    const regex = /^(?!.*(\d{4,}|[_-]{2,}))[a-zA-Z0-9_-]{3,}(?<![0-9_-])$/;

    return regex.test(username);
  }
}

export default Validator; 