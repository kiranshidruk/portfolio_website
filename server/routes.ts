import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { storage } from "./storage";
import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });
  
      const mailOptions = {
        from: validatedData.email,
        to: "kiran.shidruk.us@gmail.com",
        subject: `[Portfolio Message] ${validatedData.subject}`,
        text: `
          Name: ${validatedData.name}
          Email: ${validatedData.email}
  
          Message:
          ${validatedData.message}
        `,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ success: true, message: "Message received" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Validation failed", errors: error.errors });
      } else {
        console.error("Email error:", error);
        res.status(500).json({ success: false, message: "An unexpected error occurred" });
      }
    }
  })
  const httpServer = createServer(app);
  return httpServer;
}
