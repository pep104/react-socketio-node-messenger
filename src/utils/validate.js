const validateForm = ({ isAuth, values, errors }) => {
  const rules = {
    username: (value) => {
      if (!value) {
        errors.username = 'Enter your username';
      } else if (
        !/^[a-zA-Z0-9]{4,}$/i.test(
          value
        )
      ) {
        errors.username = 'Invalid username';
      }
    },

    password: (value) => {
      if (!value) {
        errors.password = 'Enter you password';
      } else if (
        !/^[a-zA-Z0-9]{6,}$/i.test(
          value
        )
      ) {
        errors.password = isAuth ? 'Invalid password' : 'Too easy password';
      }
    }

  }


  Object.keys(values).forEach(key => 
  rules[key] && rules[key](values[key])
  )
}

export default validateForm