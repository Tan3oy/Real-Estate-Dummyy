export default function handler(req, res) {
    const backendUrl = process.env.VITE_API_URL;
    const { path } = req.query;

    res.redirect(`${backendUrl}/api/${path}`);
}
