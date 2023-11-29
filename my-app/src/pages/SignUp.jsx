import React from 'react'
import img16 from '../Images/img16.png'

const SignUp = () => {
  return (
    <form className='d-flex'>
      <div className='w-100'>
        <div className='d-flex'>
          <h3>Create an account</h3>
          <div className='d-flex'>
            <p>Already registered?</p>
            <button to='/Login' class=" btn-primary col-md-4" type="submit"></button>
            {/* <Link to='/Login' className=''>Login</Link> */}
            {/* <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>
              Login
            </Link> */}
          </div>
        </div>
        <div className='d-flex'>
          <div className='col-md-3'>
            <label for="validationCustom01" class="form-label">First Name</label>
            <input type="text" class="form-control" id="validationCustom01" value="" required />
          </div>
          <div className='col-md-3'>
            <label for="validationCustom01" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="validationCustom01" value="" required />
          </div>
        </div>
        <div className='d-flex'>
          <div className='col-md-3'>
            <label for="validationCustom01" class="form-label">Username</label>
            <input type="text" class="form-control" id="validationCustom01" value="" required />
          </div>
          <div className='col-md-3'>
            <label for="validationCustom01" class="form-label">Phone</label>
            <input type="text" class="form-control" id="validationCustom01" value="" required />
          </div>
        </div>
        <div className='col-md-6'>
          <label for="validationCustom01" class="form-label">Email</label>
          <input type="text" class="form-control" id="validationCustom01" value="" required />
        </div>
        <div className='d-flex'>
          <div className='col-md-3'>
            <label for="validationCustom01" class="form-label">Password</label>
            <input type="text" class="form-control" id="validationCustom01" value="" required />
          </div>
          <div className='col-md-3'>
            <label for="validationCustom01" class="form-label">Confirm Password</label>
            <input type="text" class="form-control" id="validationCustom01" value="" required />
          </div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label class="form-check-label" for="invalidCheck">
              I Agree To The Privacy Policy
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <button class="btn btn-primary" type="submit">Signup </button>
        </div>
      </div>
      <img src={img16} alt="" />

    </form>
  )
}

export default SignUp
