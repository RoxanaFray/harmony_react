import { getRoistatVisit, getRoistatUtmFieldsObj } from '../App'

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

async function awsHarmonyRoistat(data) {
  const visit = getRoistatVisit();
  const utmFields = getRoistatUtmFieldsObj();
  const phone = data.phone;
  const name = data.name;
  return await fetch(`https://3u5vefhxok.execute-api.eu-central-1.amazonaws.com/default/harmonyRoistat?phone=${phone}&name=${name}&visit=${visit}&utm_campaign=${utmFields.utm_campaign}&utm_source=${utmFields.utm_source}&utm_medium=${utmFields.utm_medium}&utm_content=${utmFields.utm_content}&utm_term=${utmFields.utm_term}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export {
  awsMail,
  awsHarmonyRoistat
}