import axios from "axios";
const TOOL_URL = import.meta.env.VITE_ENG_URL;


  export const getDownloadLink = async (filename:string) =>{
    try {
      const response = await axios.get(
        `${TOOL_URL}/whitepaper/file-url/${filename}.pdf`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error : any) {
      console.log("🚀 ~ getDownloadLink ~ error", error?.response?.data?.message as unknown as string)
      throw new Error(error?.response?.data?.message as unknown as string)
    }
  }