import axios from "axios";
import { supabase } from "~/Supabase/supabaseClient";

const TOOL_URL = import.meta.env.VITE_ENG_URL;

type Payload = {
  query: string;
  tool: string;
};

export const getTools = async (data: Payload) => {
  try {
    const response = await axios.post(
      `${TOOL_URL}/tool`,
      data,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to get tools");
  }
};

export const prdGenerate = async (data: { project_description: string; url: string }) => {
  try {
    const response = await axios.post(
      `${TOOL_URL}${data.url}`,
      { project_description: data.project_description },
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to generate product");
  }
};

export const aiAgentBuild = async (data: { project_description: string }) => {
  try {
    const response = await axios.post(
      `${TOOL_URL}/agentic-ai-project/ai-agent`,
      data,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to generate product");
  }
};

export const sendMail = async (data: { email: string; project_id: string }) => {
  try {
    const { error, data: response } = await supabase
      .from('project_generation')
      .update({ email: data.email })
      .eq('project_id', data.project_id)
      .select();
    
    if (error) throw error;
    return response;
  } catch (error: any) {
    console.error("Error in sendMail:", error?.message || error);
    throw new Error(error?.message || 'Failed to send email');
  }
};