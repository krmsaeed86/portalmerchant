export default function TaksaIcon({
  icon,
  className,
  fontSize,
  color,
  oth,
}: {
  icon:
    | string
    | "icon-arrow-left"
    | "icon-arrow-right"
    | "icon-bell"
    | "icon-corporate"
    | "icon-document-filter"
    | "icon-edit"
    | "icon-export"
    | "icon-filter"
    | "icon-filter-square"
    | "icon-folder-open"
    | "icon-home-2"
    | "icon-math"
    | "icon-menu"
    | "icon-profile-2user"
    | "icon-profile-tick"
    | "icon-receipt-item"
    | "icon-recontract"
    | "icon-sort"
    | "icon-user"
    | "icon-user-square";
  className?: string;
  fontSize?: string;
  color?: string;
  oth?: string;
}) {
  return (
    <div
      className={`${icon} ${className ?? className} ${color ?? "text-gray-900 dark:text-gray-100"} ${oth ?? ""}`}
      style={{ fontSize: fontSize ?? "20px" }}
    />
  );
}
