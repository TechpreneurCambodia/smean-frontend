export function Card({ children, className }) {
    return (
      <div className={`shadow-lg rounded-2xl bg-white p-4 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className }) {
    return <div className={`p-2 ${className}`}>{children}</div>;
  }
  