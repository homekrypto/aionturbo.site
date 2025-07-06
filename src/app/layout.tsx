
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/theme-variables.css";
import "@/styles/global-footer-controls.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI on Turbo - Advanced AI Solutions for Business",
  description: "Transform your business with cutting-edge AI solutions. We deliver intelligent automation, advanced analytics, and innovative AI technologies that drive growth and efficiency.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
