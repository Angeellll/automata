// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const link = "https://currency-denomination-api.onrender.com/denomination?currency_from=PHP&currency_to=USD&from_value=315.75";

export default function handler(req, res) {
  res.status(200).json({ link })
}
