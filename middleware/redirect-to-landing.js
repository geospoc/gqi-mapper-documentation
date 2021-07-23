export default function ({ route, redirect, params }) {
  if (route.path === '/') {
    redirect('/landing');
  }

  if (route.path === '/landing') {
    const asideComponent = document.getElementsByTagName('aside');
    if (asideComponent.length > 0) {
      asideComponent[0].style.display = 'none';
    }
  }

  if (
    params.pathMatch === 'about' ||
    params.pathMatch === 'objective' ||
    params.pathMatch === 'quick-start' ||
    params.pathMatch === 'results-portal' ||
    params.pathMatch === 'project-trials'
  ) {
    const asideComponent = document.getElementsByTagName('aside');
    if (asideComponent.length > 0) {
      asideComponent[0].style.display = 'block';
    }
  }
}
