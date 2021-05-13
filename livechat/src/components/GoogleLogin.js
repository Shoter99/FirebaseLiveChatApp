
const GoogleLogin = ( {onLogin}) => {
    return (
        <div className='login_form'>
            <button className="loginBtn" onClick={onLogin}>Log in with Google</button>
        </div>
    )
}

export default GoogleLogin
