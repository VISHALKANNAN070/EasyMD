const validateInput = (req, res, next) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({error: 'text is required and must be a string'})
  }

  const trimmedText = text.trim();

  if (trimmedText.length === 0) {
    return res.status(400).json({error: 'text must not be empty'})
  }

  if (trimmedText.length > 10000) {
    return res.status(400).json({error: 'text must not exceed 10,000 characters'})
  }

  req.body.text = trimmedText.replace(/\0/g, '')

  next()
}
export default validateInput
