export type ProfileLink = {
  label: string
  href: string
  icon: string
}

export type ProfileData = {
  name: string
  location: string
  avatarUrl: string
  intro: string
  aiIntro: string
  reachOutPre: string
  links: ProfileLink[]
}
