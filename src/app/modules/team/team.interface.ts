

export interface ITeam {
  teamBanner: string[]
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
  image: string
  category: string
}
