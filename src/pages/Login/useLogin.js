import { useState } from "react"
import { login } from "../../services/authService"
import toast from "react-hot-toast"

export function useLogin() {

  const [showPassword,setShowPassword] = useState(false)
  const [identifier,setIdentifier] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")

  const togglePassword = ()=>{
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const result = login(identifier,password)

    if(result.success){
      toast.success("Đăng nhập thành công!")
      setMessage("")
      window.location.href = "/home"
      console.log(result.user)
    }else{
      toast.error("Đăng nhập thất bại")
      setMessage(result.message)
    }
  }

  const handleSocialLogin = (provider)=>{
    toast(`Login with ${provider}`)
  }

  return{
    showPassword,
    identifier,
    password,
    setIdentifier,
    setPassword,
    togglePassword,
    handleSubmit,
    handleSocialLogin,
    message
  }

}