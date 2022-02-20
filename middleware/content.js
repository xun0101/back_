export default (contentType) => {
  return (req, res, next) => {
    if (!req.headers['content-type'] || !req.headers['content-type'].includes(contentType)) {
      console.log(123)
      res.status(400).send({ success: false, message: '資料格式不正確' })
    } else {
      next()
    }
  }
}
