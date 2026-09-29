import Image from "next/image";
import { about } from "@/data/projects";

export default function HostCard() {
  return (
    <div className="grid w-full max-w-[420px] grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center gap-6 rounded-host bg-canvas p-8 shadow-host">
      <div className="flex flex-col items-center gap-2.5 text-center">
        <div className="relative flex size-[104px] items-center justify-center overflow-hidden rounded-full bg-ink text-[40px] font-bold text-white">
          {about.avatar ? (
            <Image src={about.avatar} alt={`${about.name} 사진`} fill sizes="104px" className="object-cover" />
          ) : (
            <span aria-hidden="true">{about.initial}</span>
          )}
        </div>
        <p className="text-[26px] leading-tight font-bold">{about.name}</p>
        <p className="text-[13px] font-semibold">{about.role}</p>
      </div>

      <dl className="flex flex-col divide-y divide-hairline">
        {about.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse py-2.5">
            <dt className="text-xs font-semibold">{stat.label}</dt>
            <dd className="text-stat text-plum">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
