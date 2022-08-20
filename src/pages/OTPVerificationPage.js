import React from 'react'
import OTPVerificationForm from '../components/common/Form/OTPVerificationForm'
import AuthPageLayout from '../_layouts/AuthPageLayout'

const OTPVerificationPage = () => {
  return (
    <React.Fragment>
      <AuthPageLayout heading="Mobile App">
        <OTPVerificationForm />
      </AuthPageLayout>
    </React.Fragment>
  )
}

export default OTPVerificationPage