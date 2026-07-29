import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import wiselookIcon from "@/assets/Wiselook_RGB_Iso_Positive_Color.svg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center font-body">
      <img
        src={wiselookIcon}
        alt="Wiselook"
        className="h-12 w-12"
        width={48}
        height={48}
        loading="eager"
        decoding="async"
      />
      <div className="space-y-2">
        <h1 className="font-heading text-5xl font-bold text-heading">404</h1>
        <p className="text-xl text-muted-foreground">Oops! This page doesn't exist.</p>
      </div>
      <Button asChild variant="hero" size="lg">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
