import {h, render} from 'preact';
import {fetchRepositories} from './api.js';
import {RepoList} from './repo-list.jsx';

fetchRepositories('jackfranklin').then(data => {
  render(h(RepoList, { repos: data }, null), document.body);
});
