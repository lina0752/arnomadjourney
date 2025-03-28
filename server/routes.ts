import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes prefix with /api
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'AR Nomad API is up and running' });
  });

  // Since this is primarily a frontend showcase, we're keeping the backend minimal
  // More routes would be added here as the project expands

  const httpServer = createServer(app);

  return httpServer;
}
