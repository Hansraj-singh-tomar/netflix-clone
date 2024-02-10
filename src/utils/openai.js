import OpenAI from 'openai';
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
    apikey: OPENAI_KEY,
    // dangerouslyAllowBrowser: true,
});

export default openai;