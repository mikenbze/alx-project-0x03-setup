import { ReactNode } from "react";

// ButtonProps from components/common/Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// LayoutProps from components/layouts/Layout.tsx
export interface LayoutProps {
  children: ReactNode;
}

// PageRouteProps from pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}
