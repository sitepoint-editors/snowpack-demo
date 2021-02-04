export function fetchRepositories(user) {
  return fetch(`https://api.github.com/users/${user}/repos`)
    .then(response=> response.json());
}

export function neverUsed() {
  console.log('NEVER CALLED')
}
