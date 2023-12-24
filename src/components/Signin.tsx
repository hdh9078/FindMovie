import { useState } from "react"
import axios from "axios";
import styles from "../css/signin.module.css";
import { Link } from "react-router-dom";

export default function Signin() {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");


    const signinData = async () => {
        const res = await axios({
            url: `/signin`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {
                userid: id,
                password: pw,
            }
        });

        if (res.data.result) {
            document.location.href = "/";

        } else {
            alert("아이디 및 비밀번호가 틀렸습니다.");
        }
    }




    return(
        <div className={styles.bodys}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.main}>
                        <input className={styles.id} name="id" type="id" placeholder="ID" onChange={e => { setId(e.target.value); }} />
                        <input className={styles.password} name="password" type="password" placeholder="Password" onChange={e => { setPw(e.target.value) }} onKeyDown={(e) => {
                            if(e.key === "Enter") {signinData()} //enter키로 로그인
                        }}/>
                        <button className={styles.signinBtn} type="button" onClick={signinData}>로그인</button>
                    </div>
                    <div className={styles.Link}>
                        <Link className={styles.signup} to="/signup">회원가입</Link>
                        |
                        {/* <Link className={styles.findPassword} to="/find/password"> 비밀번호 찾기</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}