import TaksaIcon from "../icon";

export default function TaksaFolderCard({
  icon,
  className,
  bgColor,
  textColor,
  textDescColor,
  title,
  desc,
  taxId,
}: {
  icon?: string;
  className?: string;
  bgColor?: string;
  textColor?: string;
  textDescColor?: string;
  title?: string;
  desc?: string;
  taxId?: string;
}) {
  return (
    <div
      className={
        className ?? `flex flex-row rounded-xl p-2 ${bgColor ?? "bg-[#2C3E50]"}`
      }
    >
      <div className="p-1">
        <TaksaIcon
          icon={icon ?? "icon-user"}
          color={"text-text-primary"}
          fontSize={"40px"}
        />
      </div>
      <div className="text-md flex w-full flex-col pr-4">
        <div className={`flex w-full justify-between pb-2 ${textColor ?? ""}`}>
          <div>{title}</div>
          <div className="text-lg">{taxId}</div>
        </div>
        <div className={`text-xs font-medium ${textDescColor ?? ""}`}>
          {desc}
        </div>
      </div>
    </div>
  );
}
