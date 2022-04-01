import AuditoriaLogo from '../images/auditoriaLogo.png';
import notifictionIcon from '../images/notifictionIcon.png'; 
import adminAvatar from '../images/adminAvatar.png';
import style from './AdminDashboard.module.css';
const AdminDashboard=()=>{
    return(
        <div>
            <nav class="navbar navbar-light bg-light">
  <div class="container-fluid container">
      <div className={style.navLeft}>
    <img src={AuditoriaLogo} class="navbar-brand" />
    <a class="navbar-brand">Admin</a> 
    </div>
    <div className={style.navRight}>
      <img src={notifictionIcon} class="admin-profile-image" />
      <img src={adminAvatar} class="admin-profile-image" />
        </div>
  </div>
</nav>
        </div>
    );
}
export default AdminDashboard;