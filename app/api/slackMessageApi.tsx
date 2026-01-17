import axios from "axios";

export const sendSlackMessage = async (slackPayload: any) => {
    try {
        await axios.post(
            "https://hooks.slack.com/services/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",
            JSON.stringify(slackPayload),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },  
            }
          );
    } catch (error) {
      throw new Error("Failed to send slack message");
    }
  };

export const sendAgentSlackMessage = async (slackPayload: any) => {
    try {
        await axios.post(
            "https://hooks.slack.com/services/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",
            JSON.stringify(slackPayload),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },  
            }
          );
    } catch (error) {
      throw new Error("Failed to send slack message");
    }
  };

  