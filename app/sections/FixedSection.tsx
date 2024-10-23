import { GitHubLogoIcon } from "@radix-ui/react-icons"

const GITHUB_REPO = process.env.GITHUB_REPO

export default function FixedSection() {
  return (
    <div className="fixed left-0 top-0 z-[30] flex h-screen w-screen items-center justify-end">
      <a
        href={GITHUB_REPO}
        aria-label="github-repo"
        target="_blank"
        className="awward-name flex h-fit w-10 flex-col items-center justify-between gap-8 bg-[#a3e635] px-2 py-4"
        rel="noreferrer"
      >
        <GitHubLogoIcon className="awward-text" width={20} height={20} />
        <p className="awward-text text-sm font-semibold tracking-tighter text-black [writing-mode:vertical-lr]">
          ShinThant
        </p>
      </a>
    </div>
  )
}
