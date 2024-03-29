function Link({ className="menu-link", onClick }) {
  const linkClass = className;

  function handleLink(event) {
    event.preventDefault();
    onClick && onClick(event)
  }

  return (
    <a className={linkClass} href="#" onClick={handleLink} />
  );
}

export default Link;
