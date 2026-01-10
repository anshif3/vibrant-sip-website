import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  className?: string;
}

const ProductCard = ({ name, description, price, image, category, className }: ProductCardProps) => {
  return (
    <div className={cn(
      "group bg-card rounded-2xl overflow-hidden shadow-md card-hover border border-border/50",
      className
    )}>
      <div className="aspect-square bg-gradient-to-br from-orange-light to-green-light p-6 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-secondary uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-lg font-bold mt-1 text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">₹{price}</span>
          <span className="text-xs text-muted-foreground">per bottle</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
