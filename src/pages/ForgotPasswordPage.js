import React from 'react'
import ForgotPasswordForm from '../components/common/Form/ForgotPasswordForm' 
import AuthPageLayout from '../_layouts/AuthPageLayout'

const ForgotPasswordPage = () => {
  return (
    <React.Fragment>
      <AuthPageLayout heading="Mobile App">
        <ForgotPasswordForm />
      </AuthPageLayout>
    </React.Fragment>
  )
}

export default ForgotPasswordPage