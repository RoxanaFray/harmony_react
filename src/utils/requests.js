async function awsMail(data) {
  const subject = data.subject;
  const text = data.text;
  const awsUrl = 'https://a43vnemv5c.execute-api.eu-central-1.amazonaws.com/default/dev-company-mail';
  return await fetch(`${awsUrl}?site=harmony&subject=${encodeURIComponent(subject)}&text=${encodeURIComponent(text)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export { awsMail }