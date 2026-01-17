interface SendEmailParams {
  email: string;
  title: string;
}

export const sendEmailFromBucket = async ({ email, title }: SendEmailParams) => {
  const response = await fetch('https://api-rejoice.rejoicehub.com/api/v1/email-sending/send-study-file/', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, title })
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }

  return await response.json();
};
