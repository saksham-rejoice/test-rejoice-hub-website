import axios from "axios";
import { data } from "react-router";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getPsQuestions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/candidate/psquestions`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to get psychological questions");
  }
};

export const submitCareerApplication = async (formData: FormData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/candidate/questions`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "ngrok-skip-browser-warning": "true",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to submit application. Please Enter Valid Data."
      );
    }
    throw new Error("Failed to submit application");
  }
};

export const getCareerScore = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/code_review/evaluate-answers`, data, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to get career score");
  }
};

export const getQuestions = async (id: string)=>{
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/offline_interview/questions/${id}`,{
       headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error("Failed to get career score");
  }
}

export const updateEmployee = async (id:string,data:any)=>{
  try {
    const response = await axios.patch(`${BASE_URL}/api/v1/overview/dynamic-update`, JSON.stringify({
          candidate_id: id,
         data,
        }), {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update employee");
  }
}
