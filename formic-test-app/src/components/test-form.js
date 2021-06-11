import React from "react";
import {useFormik} from 'formik';
const TestFrom = (props) => {
    const formik = useFormik({
        initialValues:{
            name : 'kaleeswaran',
            email: '',
            department: ''
        }
    })
  return (
      
    <div>
      <form action="/action_page.php">
        <label htmlFor="fname">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={formik.name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email.."
          value={formik.email}
        />

<label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Your Department name.."
          value={formik.department}
        />


        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default TestFrom;
