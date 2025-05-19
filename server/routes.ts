import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import crypto from "crypto";
import { generateSha256Hash, generateSha512Hash } from "./sha2";

export async function registerRoutes(app: Express): Promise<Server> {
  // Hash generation endpoint
  app.post("/api/hash", (req, res) => {
    const { message, algorithm } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }
    
    let hash: string;
    
    if (algorithm === "SHA-512") {
      hash = generateSha512Hash(message);
    } else {
      // Default to SHA-256
      hash = generateSha256Hash(message);
    }
    
    return res.json({
      hash,
      algorithm: algorithm || "SHA-256"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
