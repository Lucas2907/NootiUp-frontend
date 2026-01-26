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
    return res.message ? console.log("Nao existe") : res.avatar_url

  }

}
const apiGit = new GitHubApi()

export default apiGit;