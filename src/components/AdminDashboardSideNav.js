import styles from './AdminDashboardSideNav.module.css';
const AdminDashboardSideNav=()=> {
  return (
    <div className={styles.AdminDashboardSideNav}>
     <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: 280}}>

    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi me-2" width="16" height="16"></svg>
          Dashboard
        </a> 
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"></svg>
          User list
        </a>
      </li>
    
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"></svg>
          Event Reservation
        </a>
      </li>
  
    </ul>

  </div>
    
    </div>
  );
}

export default AdminDashboardSideNav;
