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

  async getFollowers(follower: string) {
    const res = await this.getInfo(follower)
    return res.message ? null : res.followers
  }

  async getFollowing(following: string) {
    const res = await this.getInfo(following)
    return res.message ? null : res.following
  }

  async getLocation(location: string) {
    const res = await this.getInfo(location)
    return res.message ? null : res.location
  }

  async getPublicRepo(publicRepo: string) {
    const res = await this.getInfo(publicRepo)
    return res.message ? null : res.public_repos
  }


}
const apiGit = new GitHubApi()

export default apiGit;