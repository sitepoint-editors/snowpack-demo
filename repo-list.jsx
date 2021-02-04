import {h} from 'preact';
export function RepoList(props) {
  return <ul>{props.repos.map(repo => {
    return <li><p>{repo.name}</p></li>
  })}</ul>
}
