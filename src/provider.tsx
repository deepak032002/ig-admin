import { NextUIProvider } from "@nextui-org/system";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Provider() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Outlet />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
