import React, {useState} from 'react'
import axios from 'axios';


export default function Compiler() {

    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [lang, setLang] = useState("java");
    const [version, setVersion] = useState("0")
    const updateCode = (event) => {
        setCode(event.target.value)
    }
    const compileCode = () => {
        var program = {
            script: code,
            language: lang,
            versionIndex: version,
            clientId: "40aaa2735be8158f19ee23e3b888ace2",
            clientSecret: "368409cfb98f05026ec7039b7985c479a6a5ff91c2ee2630210646ba5fa75ee8"
        };
        axios.post('/v1/execute', program).then(response => setOutput(response.data.output));

    }


    const updateLang = (event) => {
        let l = (event.target.value).toString()

        setLang(l)
        console.log(lang)
        setVersion("0")
    }

    return (
        <div>
            <select onChange={updateLang}>
                <option value="java">JAVA</option>
                <option value="python3">PYTHON</option>
                <option value="php">PHP</option>


            </select>
            <input onChange={updateCode}></input>
            <button onClick={compileCode}>Compile</button>
            <h1>{output}</h1>

        </div>
    )
}
