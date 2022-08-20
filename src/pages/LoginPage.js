import React from 'react'
import LoginForm from '../components/common/Form/LoginForm'
import AuthPageLayout from '../_layouts/AuthPageLayout'

const LoginPage = () => {
  return (
    <React.Fragment>
      <AuthPageLayout heading="Mobile App">
        <LoginForm title="Admin Login" />
      </AuthPageLayout>
    </React.Fragment>
  )
}

export default LoginPage