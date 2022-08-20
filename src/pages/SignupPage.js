import React from 'react'
import SignupForm from '../components/common/Form/SignupForm' 
import AuthPageLayout from '../_layouts/AuthPageLayout'

const SignupPage = () => {
  return (
    <React.Fragment>
      <AuthPageLayout heading="Mobile App">
        <SignupForm title="User Registration" />
      </AuthPageLayout>
    </React.Fragment>
  )
}
 

export default SignupPage