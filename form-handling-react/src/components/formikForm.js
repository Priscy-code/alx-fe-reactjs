import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

// function FormikForm(){
//     const validationSchema = Yup.object({
//         username: Yup.string().required("Username is required"),
//         email: Yup.string().email("invail email"). required("Email is required"),
//         password: Yup.string().required("Password is required")
//     });

//     const initialValues = {
//         username: '',
//         email: '',
//         password: ''
//     };

//     const handlSubmit =(values) => {
//         alert(`Form sub,itted successfully with values: ${JSON.string(values, null, 2)}`)
//     };

//     return(
        



//         {({isSubmitting}) => (
//             <Form>
//                 <div>
//                     <Field type ="text" name>

//                     </Field>
//                 </div>
//             </Form>
//         )}
//     )
// }

























const FormikForm = Yup.object({
    name:Yup.string().required("userName is required"),
    email: Yup.string().email('Invalid email'). required('Email is required'),
    password: Yup.string().required("Password is required")
});
const Form = () => (
    <Formik
      initialValues={{name:'', email: '', password: ''}}
      validationScheme = {validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }} >
        {() => (
            <Form>
                <Field type ="text" name ="name"/>
                <ErrorMessage name ="name" component="div" style ={{color:'red'}}/>

                <Field type ="email" name ="email"/>
                <ErrorMessage name="email" component="div"/>

                <Field type ="Password" name= "password"/>
                <ErrorMessage name="password" component="div"/>

                <button type="submit">Submit</button>
            </Form>
        )}
      </Formik>
)

export default FormikForm