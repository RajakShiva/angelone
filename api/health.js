export default function handler(req, res) {
  res.status(200).json({
    status: "success",
    message: "Angel One backend is running"
  });
}
