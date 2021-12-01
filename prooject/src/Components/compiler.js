import React, {useState, useContext, useEffect} from 'react' 
import axios from 'axios';
import Createroomcontext from '../Context/createroom'
import UserDataContext from '../Context/credentialscontext'; 
import {useParams} from 'react-router-dom'
import firebase from 'firebase';
import uuid from 'react-uuid'
// import {CodeEditorEditable} from 'react-code-editor-editable'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as CodeMirror } from 'react-codemirror2'
// import  { Redirect } from 'react-router-dom'
import './compiler.css'
import Message from './message';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import UserDataContext from "../Context/credentialscontext";

// import { highlight, languages } from 'prismjs/components/prism-core';
const db = firebase.database();
const uid = uuid()
export default function     Compiler({history}) {
    // const userData = useContext(UserDataContext);
    // const userData = useContext(UserDataContext)
    // const roomdata = useContext(Createroomcontext)
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [lang, setLang] = useState("java");
    const [version, setVersion] = useState("0")
    const {id} = useParams()

    useEffect(() => {
        if(localStorage.length==0){
            history.push("/signup");
        }
        db.ref("Rooms").child(id).on("value", snapshot => {
            var data = snapshot.val()
            if (data.userid != uid) {
                setCode(data.code)
            }
        })

    })
    const updateCode = (editor,data,value) => {
        setCode(value)
        const url = `https://real-time-coding-default-rtdb.firebaseio.com/Rooms/${id}.json`
        const prog = {
            code: value,
            userid: uid
        }
        axios.patch(url, prog)

    }
    const compileCode = () => {
        console.log("y")
        var program = {
            script: code,
            language: lang,
            versionIndex: version,
            clientId: "7ee6021fc0a692cfe28cc5f815600265",
            clientSecret: "51737cbf33461eb8f477f08c958808e2a9488167768716b7ba095df6d0848971"
        };
        axios.post('/v1/execute', program).then(response =>{
            var result=response.data.output
            
            setOutput(result)
        })
    }

    


    const updateLang = (event) => {
        let l = (event.target.value).toString()
        setLang(l)
        console.log(lang)
        setVersion("0")
    }

    const logout=()=>{
        
        history.push("/joinroom");

    }

    // let myStyle={
    //     color: 'red',
    //     backgroundColor: 'blue'
    // }
    return (
        
            <div className="two">
                <div className="codepart">
                <div className = "tiltbar">
                <button className = "click1" onClick={logout}>Leave Room</button>
                <div className = "copylinkbar">
                <CopyToClipboard text={`localhost:3000/compiler/${id}`} >
                <button className = "click3" >Copy Room Link</button>
                </CopyToClipboard>
                <CopyToClipboard text={`${id}`} >
                <button className = "click3" >Copy Room ID</button>
                </CopyToClipboard>
                </div>
                
                </div>
            <select className = "click2"onChange={updateLang}>
                <option value="java">JAVA</option>
                <option value="python3">PYTHON</option>
                <option value="php">PHP</option>
            </select>
            
            <CodeMirror value={code}
                options={
                    {
                        lineWrapping:true,
                        theme: 'material',
                        lineNumbers: true,      
                       
                       
                    }
                }
            onBeforeChange={updateCode}   />
            <button className = "click3" onClick={compileCode}>Compile</button>
            <h1 style={{color: 'red'}}>{output}</h1>
            </div>
            <div className="messagePart">
                <Message id={id} email={localStorage.getItem("email")} className="messagePart"/>
            </div>
            </div>

        
    )
}
