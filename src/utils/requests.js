async function awsMail(data) {
  const subject = data.subject;
  const text = data.text;
  return await fetch(`https://a43vnemv5c.execute-api.eu-central-1.amazonaws.com/default/dev-company-mail?site=harmony&subject=${encodeURIComponent(subject)}&text=${encodeURIComponent(text)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export {
  awsMail
}