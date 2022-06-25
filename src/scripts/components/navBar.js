import renderToDom from '../helpers/renderToDom';
import logo from '../../../instructions/hhpw-record.png';

const navBar = () => {
  const navString = `<nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">
  <img id="logo" class="logo" src="${logo}" alt="" width="auto" height="40">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href='#' id="view-orders">View Orders</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href='#' id="create-order">Create Order</a>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
    </form>
    <button id="google-auth" class="btn btn-outline-danger google-auth">Log Out</button>
  </div>
</div>
</nav>`;

  renderToDom('#nav-bar', navString);
};

export default navBar;
