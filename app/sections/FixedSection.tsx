import { GitHubLogoIcon } from "@radix-ui/react-icons"

const GITHUB_REPO = process.env.GITHUB_REPO

export default function FixedSection() {
  return (
    <a
      href={GITHUB_REPO}
      aria-label="github-repo"
      target="_blank"
      className="awward-name fixed right-0 top-1/2 z-30 flex w-10 -translate-y-1/2 flex-col items-center justify-between gap-8 bg-[#a3e635] px-2 py-4"
      rel="noreferrer"
    >
      <GitHubLogoIcon className="awward-text" width={20} height={20} />
      <p className="awward-text text-sm font-semibold tracking-tighter text-black [writing-mode:vertical-lr]">
        ShinThant
      </p>
    </a>
  )
}
