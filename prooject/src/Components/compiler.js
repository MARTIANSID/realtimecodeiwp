import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios';
import Createroomcontext from '../Context/createroom'
import UserDataContext from '../Context/credentialscontext';
import {useParams} from 'react-router-dom'
import firebase from 'firebase';
import uuid from 'react-uuid'
import {CodeEditorEditable} from 'react-code-editor-editable'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as CodeMirror } from 'react-codemirror2'

// import { highlight, languages } from 'prismjs/components/prism-core';

const db = firebase.database();
const uid = uuid()
export default function Compiler() {
    const userData = useContext(UserDataContext)
    const roomdata = useContext(Createroomcontext)
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [lang, setLang] = useState("java");
    const [version, setVersion] = useState("0")
    const {id} = useParams()

    useEffect(() => {
        db.ref("Rooms").child(id).on("value", snapshot => {
            var data = snapshot.val()
            if (data.userid != uid) {
                setCode(data.code)
            }
        })

    }, [])


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
        console.log("yup") // db.ref("Rooms").remove()
        var program = {
            script: code,
            language: lang,
            versionIndex: version,
            clientId: "40aaa2735be8158f19ee23e3b888ace2",
            clientSecret: "368409cfb98f05026ec7039b7985c479a6a5ff91c2ee2630210646ba5fa75ee8"
        };
        axios.post('/v1/execute', program).then(response =>{
            var result=response.data.output
            
            setOutput(result)
        })
           
        
          
            // setOutput(()));


            

    }


    const updateLang = (event) => {
        let l = (event.target.value).toString()
        setLang(l)
        console.log(lang)
        setVersion("0")
    }

    return (
        <div style={
            {color: 'white'}
        }>
            <select onChange={updateLang}>
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
            onBeforeChange={updateCode}    />
            <button onClick={compileCode}>Compile</button>
            <h1>{output}</h1>

        </div>
    )
}
