class GitHubApi {
  constructor() { }

  async getInfo(info: string) {
    const res = await fetch(`https://api.github.com/users/${info}`)
      .then((res) => res.json())
      .then((data) => {
        return data
      })
    return res
  }

  async getAvatar(avatar: string) {
    const res = await this.getInfo(avatar)
    return res.message ? null : res.avatar_url

  }

  async getName(name: string) {
    const res = await this.getInfo(name)
    return res.message ? null : res.name
  }

  async getBio(bio: string) {
    const res = await this.getInfo(bio)
    return res.message ? null : res.bio

  }
}
const apiGit = new GitHubApi()

export default apiGit;