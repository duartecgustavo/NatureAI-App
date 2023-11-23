const API_CHAT_GPT = 'https://api.openai.com/v1/chat/completions'
const OPENAI_API_KEY = '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'

// CONECTADO AO CHAT
export async function callChatGpt(msg) {

    const prompt = `Generate keyword in Portuguese for next post: ${msg}. Return each item separated by a comma, in lowercase, an without a line break. The answer must contain a maximum of 450 characters. `;

    const url = API_CHAT_GPT
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}`, }
    const body = {
        "model": "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": `${prompt}` }]
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })

        const data = await response.json();

        return data

    } catch (err) {
        console.log('error', err)
    }
}

// MOCK DO RETORNO DO CHAT
// export async function callChatGpt(msg) {
//     const resposta = `O chat está fora no momento ☠️`;

//     const data = {
//         "id": "chatcmpl-7NUkNtf66RBkpbW09Y7jpPRPpYC58",
//         "object": "chat.completion",
//         "created": 1685834091,
//         "model": "gpt-3.5-turbo-0301",
//         "usage": {
//             "prompt_tokens": 10,
//             "completion_tokens": 10,
//             "total_tokens": 20
//         },
//         "choices": [
//             {
//                 "message": {
//                     "role": "assistant",
//                     "content": `${resposta}`
//                 },
//                 "finish_reason": "stop",
//                 "index": 0
//             }
//         ]
//     }
//     return data
// }

