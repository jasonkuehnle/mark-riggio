import nodemailer from "nodemailer";

export default async function handler(req, res) {
    console.log("API HIT");

    if (req.method !== "POST") {
        console.log("Wrong method:", req.method);
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        console.log("BODY:", req.body);

        const { firstName, lastName, email, phone, message } = req.body;

        console.log("ENV CHECK:", {
            user: process.env.EMAIL_USER ? "exists" : "missing",
            pass: process.env.EMAIL_PASS ? "exists" : "missing",
        });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log("Transporter created");

        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission`,
            text: `Message: ${message}`,
        });

        console.log("EMAIL SENT:", info);

        return res.status(200).json({ message: "Email sent" });
    } catch (err) {
        console.error("FULL ERROR:", err);
        return res.status(500).json({
            message: "Error sending email",
            error: err.message,
        });
    }
}