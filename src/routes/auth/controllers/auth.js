export const get = (req, res) => {
  res
    .status(200)
    .json({
      "route": "/auth/",
      "status": "success"
    })
}
