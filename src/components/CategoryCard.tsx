import "./CategoryCard.css";

type Props = {
  icon: string;
  label: string;
};

export default function CategoryCard({ icon, label }: Props) {
  return (
    <div className="category-card">
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
}