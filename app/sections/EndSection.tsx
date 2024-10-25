import { cn } from "@/lib/utils"
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"
import { PoppinFont } from "../fonts"

const GITHUB_ACC = process.env.GITHUB_ACC
const LINKEDIN_ACC = process.env.LINKEDIN_ACC
const TWITTER_ACC = process.env.TWITTER_ACC

export default function EndSection() {
  return (
    <section
      id="end-section"
      className={cn(
        PoppinFont.className,
        "relative z-20 h-[65vh] w-screen bg-indigo-800"
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
            <div className="flex flex-col items-start gap-5 pl-[60%]">
              <a
                href={LINKEDIN_ACC}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <LinkedInLogoIcon className="text-white" />
                <div className="text-xs text-white">Linkedin</div>
              </a>
              <a
                href={GITHUB_ACC}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <GitHubLogoIcon className="text-white" />
                <div className="text-xs text-white">Github</div>
              </a>

              <a
                href={TWITTER_ACC}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <TwitterLogoIcon className="text-white" />
                <div className="text-xs text-white">Twitter</div>
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            "text-[200px] font-bold uppercase leading-[1] tracking-tighter text-gray-200"
          }
        >
          Motion Scape
        </div>
      </div>
    </section>
  )
}
