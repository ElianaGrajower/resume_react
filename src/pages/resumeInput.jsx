import React from 'react'
import Logout from '../components/login_logout/logout'
import ResumeBuilder from '../components/resumeBuilder'

export default function ResumeInput({logout, addResume}) {
  return (
    <div>
        <Logout logout={logout} />
        <ResumeBuilder addResume={addResume}/>
    </div>
  )
}
