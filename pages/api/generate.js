export default function handler(req, res) {
  const length = 15; // minimum length
  const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  // Ensure we start with a letter (for consistency)
  result += charset[Math.floor(Math.random() * 26)]; // first 26 chars are letters
  
  // Generate the rest of the string
  for (let i = 0; i < length - 1; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  
  res.status(200).json({ randomString: result });
}
