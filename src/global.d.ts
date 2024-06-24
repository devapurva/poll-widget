// src/global.d.ts
interface Window {
  mountWidget: (elementId: string, questions: { question: string; options: { text: string; percentage: number }[]; }[], design: "buttons" | "bubbles") => void;
}
