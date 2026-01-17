const slackFormatContact = (data: any) => {
    return `
  :pushpin: *New In Submission* \n
  ----------------------------------------  
  :bust_in_silhouette: *Name*: ${data?.name} \n  
  :e-mail: *Email*: <mailto:${data?.email}|${data?.email}> \n  
  :telephone_receiver: *Mobile*: <tel:${data?.contact}|${data?.contact}> \n  
  :briefcase: *Service*: ${data?.service} \n  
  :subject: *Subject*: ${data?.subject} \n  
  :moneybag: *Budget*: ${data?.budget} \n  
  :clock3: *Start Time*: ${data?.startTime} \n  
  :page_facing_up: *Requirement*: ${data?.requirement} \n  
  :notebook: *Custom Requirement*: ${data?.message} \n  
  :speech_balloon: *Message*: ${data?.message} \n  
  :link: *Reference*: <${data?.reference}> \n  
  :small_blue_diamond: *_Next Steps_*: _Team to review and respond accordingly!_ :rocket:
    `;
  };
  
export default slackFormatContact;
