/** GitHub kullanıcı adı — profil fotoğrafı ve link için. */
export function getGitHubUsername(): string {
  return process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "burakboduroglu";
}

/** GitHub’ın sunduğu avatar URL’si (`username.png` → avatars’a yönlendirilir). */
export function getGitHubProfileAvatarUrl(): string {
  return `https://github.com/${getGitHubUsername()}.png`;
}

export function getGitHubProfileUrl(): string {
  return `https://github.com/${getGitHubUsername()}`;
}
