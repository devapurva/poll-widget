// src/global.d.ts
interface Window {
  mountWidget: (elementId: string, questions: { question: string; options: string[] }[], design: "buttons" | "pacman") => void;
}
