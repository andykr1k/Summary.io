import axios from "axios"
import { SuccessNotification, WarningNotification } from "../components";

export default function createPDFChat() {
    const key = document.getElementById('OPENAIKEY')
    const url = 'http://127.0.0.1:5000/'
    if (key === ""){
        WarningNotification(theme,'Please input OpenAI key.');
    } else {
            axios.get(url)    
            .then(res=>{console.log(res)})
            .then(SuccessNotification('Chatbot Created!'))
            .catch(error => {
                WarningNotification(error.response)
            })
    }
}
