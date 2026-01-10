import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="flex items-center">
        <span className="text-2xl md:text-3xl font-bold">
          <span className="text-primary">J</span>
          <span className="text-foreground">and</span>
          <span className="text-secondary">J</span>
        </span>
        <span className="ml-1 text-lg md:text-xl font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
          Foods
        </span>
      </div>
    </Link>
  );
};

export default Logo;
