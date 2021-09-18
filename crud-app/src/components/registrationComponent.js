import React from 'react'

export default function RegistrationComponent() {
    return (
        <div className="container">
  <h2>Form control: input</h2>
  <p>The form below contains two input elements; one of type text and one of type password:</p>
  <form>
    <div className="form-group">
      <label for="usr">Name:</label>
      <input type="text" className="form-control" id="usr" />
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" />
    </div>
  </form>
</div>
    )
}
