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
    return res.message ? console.log("Nome Não Encontrado") : res.name
  }

}
const apiGit = new GitHubApi()

export default apiGit;