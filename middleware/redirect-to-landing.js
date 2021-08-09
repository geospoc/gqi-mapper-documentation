export default function ({ route, redirect }) {
  // Render side bar for all pages except index page
  if (route.path === '/') {
    const asideComponent = document.getElementsByTagName('aside');
    if (asideComponent.length > 0) {
      asideComponent[0].style.display = 'none';
    }
  } else {
    const asideComponent = document.getElementsByTagName('aside');
    if (asideComponent.length > 0) {
      asideComponent[0].style.display = 'block';
    }
  }

  // If user clicks on introduction link in sidebar redirect them to index page
  if (route.path === '/introduction') {
    redirect('/');
  }
}
