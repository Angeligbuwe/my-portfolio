type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "default" | "md" | "lg";
};

export const Button = ({ children, href, variant = "primary", size = "default" }: ButtonProps) => {

  const baseClasses =
    "rounded-full font-semibold transition-colors duration-300";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white";

  return (
    <a href={href} className={`${baseClasses} ${sizeClasses[size]} ${variantClasses}`}>
      {children}
    </a>
  );
};