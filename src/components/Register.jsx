import { useInput} from "../util/common"

export default function Register () {
  const email = useInput('')
  const pw = useInput('')
  const pwc = useInput('')
  const name = useInput('')
  const pattren = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])/
 
  function onClickBtn() {
    if (email.value&&pw.value&&pwc.value&&name.value) {
      if (pw.value != pwc.value) {
         return alert('비번이 일치하지 않습니다.')
     } else if(pattren.test(email.value) == false) {
      return alert("@가 들어가지 않았습니다.")
     } 
    }else if (!email.value||!pw.value||!pwc.value||!name.value) {
      return alert('빈값이 있습니다.')
    }
    else return alert("회원가입 성공")
  }
  
  return (
    <div>
      <h1>Register</h1>
      <div>Email:</div>
      <input type="email" placeholder="Email" {...email}/>
      <br/>
      <div>PW:</div>
      <input type="password" placeholder="Pw" {...pw}/>
      <br/>
      <div>PWC:</div>
      <input type="password" placeholder="PwC" {...pwc}/>
      <br/>
      <div>NAME:</div>
      <input type="text" placeholder=" Name" {...name}/>
      <br />
      <button onClick={onClickBtn}>Register</button>
    </div>
  )
}