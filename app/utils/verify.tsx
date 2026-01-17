import axios from 'axios';

const RECAPTCHA_SECRET_KEY = import.meta.env.VITE_RECAPTCHA_SECRET_KEY

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or use your specific frontend URL
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method === 'POST') {
    const { captchaValue } = req.body
    const apiRes = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captchaValue}`,)
    return res.status(200).send(apiRes?.data)
  }
}