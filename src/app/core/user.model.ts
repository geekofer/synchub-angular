export enum userStatus {
  synchronizing = '_SYNCHRONIZING__',
  syncronized = '_SYNCHRONIZED_',
  notSynchronized = '_NOT_SYNCHRONIZED_',
}

export class User {
  public login: string;
  public id: number;
  public node_id: string;
  public avatar_url: string;
  public gravatar_id: string;
  public url: string;
  public html_url: string;
  public followers_url: string;
  public following_url: string;
  public gists_url: string;
  public starred_url: string;
  public subscriptions_url: string;
  public organizations_url: string;
  public repos_url: string;
  public events_url: string;
  public received_events_url: string;
  public bio: string;
  public company: string;
  public blog: string;
  public location: string;
  public name: string;
  public public_repos: string;
  public public_gists: string;
  public followers: string;
  public following: string;
  public public: string;
  status: userStatus;

  constructor(data?: any) {
    this.id = data && data.id ? data.id : null;
    this.login = data && data.login ? data.login : null;
    this.node_id = data && data.node_id ? data.node_id : null;
    this.avatar_url = data && data.avatar_url ? data.avatar_url : null;
    this.gravatar_id = data && data.gravatar_id ? data.gravatar_id : null;
    this.url = data && data.url ? data.url : null;
    this.html_url = data && data.html_url ? data.html_url : null;
    this.followers_url = data && data.followers_url ? data.followers_url : null;
    this.following_url = data && data.following_url ? data.following_url : null;
    this.gists_url = data && data.gists_url ? data.gists_url : null;
    this.starred_url = data && data.starred_url ? data.starred_url : null;
    this.subscriptions_url = data && data.subscriptions_url ? data.subscriptions_url : null;
    this.organizations_url = data && data.organizations_url ? data.organizations_url : null;
    this.repos_url = data && data.repos_url ? data.repos_url : null;
    this.events_url = data && data.events_url ? data.events_url : null;
    this.received_events_url = data && data.received_events_url ? data.received_events_url : null;
    this.bio = data && data.bio ? data.bio : null;
    this.company = data && data.company ? data.company : null;
    this.blog = data && data.blog ? data.blog : null;
    this.location = data && data.location ? data.location : null;
    this.name = data && data.name ? data.name : null;
    this.public_repos = data && data.public_repos ? data.public_repos : null;
    this.public_gists = data && data.public_gists ? data.public_gists : null;
    this.followers = data && data.followers ? data.followers : null;
    this.following = data && data.following ? data.following : null;
    this.status = data && data.status ? data.status : userStatus.notSynchronized;
  }
}
