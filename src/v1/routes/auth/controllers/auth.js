export const get = (req, res) => {
  res
    .status(200)
    .json({
      "route": "/v1/auth/",
      "method": "get",
      "status": "success"
    })
}

export const post = (req, res) => {
  res
    .status(200)
    .json({
      "route": "/v1/auth/",
      "method": "post",
      "status": "success"
    })
}
