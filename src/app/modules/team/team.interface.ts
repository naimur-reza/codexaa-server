export interface ITeamBanner {
  teamBanners?: {
    _id: string
    url: string
  }[]
  teams: ITeamMember[]
}

export interface ITeamMember {
  name: string
  bio: string
  profileImage: string
  socials: {
    facebook: string
    linkedin: string
    behance: string
  }
  description: string
  category: string
}
