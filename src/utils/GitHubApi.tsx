const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI;
const GITHUB_AUTH_URL = "https://github.com/login/oauth/authorize";

class GitHubApi {
  constructor() { }

  login() {
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scope: "read:user",
      allow_signup: "true"
    })

    const authURL = `${GITHUB_AUTH_URL}?${params.toString()}`;
    window.location.href = authURL

  }

  async getInfo(info: string) {
    const res = await fetch(`https://api.github.com/users/${info}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        return data

      })
    return res
  }

  getLoggedUser() {
    try {
      return JSON.parse(localStorage.getItem("users") || 'null')
    } catch {
      return null
    }
  }

  isLoggedIn() {
    return !!this.getLoggedUser()
  }


}
const apiGit = new GitHubApi()

export default apiGit;