type Props = {
  children: string;
  className?: string;
};

export default function MaterialIcon({ children, className = "" }: Props) {
  return <span className={`material-symbols-outlined ${className}`}>{children}</span>;
}