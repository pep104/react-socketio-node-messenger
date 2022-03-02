import { withFormik } from 'formik';
import RegisterForm from "../components/RegisterForm";
import validateForm from '../../../utils/validate'

export default withFormik({

    enableReinitialize: true,
    mapPropsToValues: () => ({
      username: '',
      password: '',
      password2: ''
    }),


    validate: values => {
      let errors = {};

      validateForm({ isAuth: false, values, errors }) 


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
  })(RegisterForm);