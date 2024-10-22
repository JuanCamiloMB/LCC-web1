import { cn } from "@/lib/utils"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { PoppinFont } from "../fonts"

export default function EndSection() {
  return (
    <section
      id="end-section"
      className={cn(
        PoppinFont.className,
        "relative z-10 h-[65vh] w-full bg-indigo-800"
      )}
    >
      <div className="flex h-full w-full flex-col justify-between px-2 pb-3 pt-[8%]">
        <div className="grid grid-cols-12 px-10">
          <div className="col-span-6">
            <div className="flex flex-col gap-2">
              <div className="text-xl tracking-tight text-white">
                Motion Scape is a website focused on animations.
              </div>
              <div className="tracking-tight text-white">
                @2024 Motion Scape
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="text-xs text-white">
              Some of the transitions are inspired by awwward website.And take
              credit for all.
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col items-end gap-5 pr-10">
              <div className="flex items-center gap-2">
                <LinkedinIcon className="text-white" size={16} />
                <div className="text-xs text-white">Linkedin</div>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="text-white" size={16} />
                <div className="text-xs text-white">Github</div>
              </div>

              <div className="flex items-center gap-2">
                <TwitterIcon className="text-white" size={16} />
                <div className="text-xs text-white">Twitter</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "text-[200px] font-bold uppercase leading-[1] tracking-tighter text-white"
          }
        >
          Motion Scape
        </div>
      </div>
    </section>
  )
}
