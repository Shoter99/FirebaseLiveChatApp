import GoogleLogin from './GoogleLogin'
const Login = ({onLogin}) => {
    return (
        <div className='middle'>
            <GoogleLogin onLogin={onLogin}/>
        </div>
    )
}

export default Login
