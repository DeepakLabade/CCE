import axios from 'axios'
import { LANGUAGES } from '../constants/language';

const api = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
})

export const executeCode = async (language: string, sourceCode: string) => {
    const response = await api.post("/execute", {
        language: language,
        //@ts-ignore
        version: LANGUAGES[language],
      files: [
        {
          content: sourceCode,
        },
      ],
    });

    return response.data
}