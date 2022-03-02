import { withFormik } from 'formik';
import LoginForm from "../components/LoginForm";
import validateForm from '../../../utils/validate'

export default withFormik({

    enableReinitialize: true,
    mapPropsToValues: () => ({
      username: '',
      password: ''
    }),

    validate: values => {
      let errors = {};

      validateForm({ isAuth: true, values, errors }) 

      // /^(?=.*[a-z])(?=.*[A-Z]){6,}$/
      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'RegisterForm'
  })(LoginForm);