export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-20 md:flex-row">
        <p className="text-sm leading-loose text-muted-foreground text-center">
          © {new Date().getFullYear()} Modern Web App Starter. Built with Next.js and ShadCN/UI.
        </p>
      </div>
    </footer>
  );
}
