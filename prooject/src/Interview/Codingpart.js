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
import { Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";

// import UserDataContext from "../Context/credentialscontext";

// import { highlight, languages } from 'prismjs/components/prism-core';
const db = firebase.database();
const uid = uuid()
export default function     Compiler() {
    // const userData = useContext(UserDataContext);
    // const userData = useContext(UserDataContext)
    // const roomdata = useContext(Createroomcontext)
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [lang, setLang] = useState("java");
    const [version, setVersion] = useState("0")
    const {id} = useParams()
    const [question, setQuestion] = useState("")
    let history = useHistory();

    useEffect(() => {
        // if(localStorage.length==0){
        //     history.push("/signup");
        // }
        db.ref("Interview").child(id).on("value", snapshot => {
            var data = snapshot.val()
            if (data.userid != uid) {
                setCode(data.code)
            }
        })
        db.ref("Interview").child(id).on("value", snapshot => {
            var data = snapshot.val()
            if (data.userid != uid) {
                setQuestion(data.question)
            }
        })

    })
    const updateCode = (editor,data,value) => {
        setCode(value)
        const url = `https://real-time-coding-default-rtdb.firebaseio.com/Interview/${id}.json`
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

    const updateQuestion = (e) => {
        setQuestion(e.target.value)
        const url = `https://real-time-coding-default-rtdb.firebaseio.com/Interview/${id}.json`
        const prog = {
            question: question,
            userid: uid,
        }
        axios.patch(url, prog)
    }

    // let myStyle={
    //     color: 'balck',
    //     backgroundColor: 'blue'
    // }

    return (
        
                    
            
                <div className="codepart">
                <div className = "tiltbar">
                <button className = "click1" onClick={logout}>Leave Meeting</button>
                </div>
                <div className="questionpart">
                <Typography variant='h6' align='left'>Question</Typography>
                    <input type="textarea" onChange={updateQuestion} value={question} />
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
            <h1 style={{color: 'black'}}>{output}</h1>
            </div>
            
            

        
     

    )
}