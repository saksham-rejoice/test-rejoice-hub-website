import axios from "axios";
const ENG_URL = import.meta.env.VITE_ENG_URL;
type Payload = {
  project_description: string;
  github_username: string;
};
export const createProject = async (data: Payload) => {
  try {
    const response = await axios.post(
      `${ENG_URL}/project/create`,
      data,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to create project");
  }
};
