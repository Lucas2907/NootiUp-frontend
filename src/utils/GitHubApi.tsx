class GitHubApi {
  constructor() { }

  _processResponse(res: Response) {
    if (res.ok) {
      return res.json().then((data) => {
        if (data.data) {
          return data.data;
        }
        return data;
      });
    }
    return Promise.reject(`Erro no${res.status}`);
  }

  async getName(name: string) {
    const res = await fetch(`https://api.github.com/users/${name}`).then((res => res.json())).then((data) => { return data })
    return res.name
  }
}

const api = new GitHubApi()

export default api;
