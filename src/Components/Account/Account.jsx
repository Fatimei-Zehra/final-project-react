import React from 'react'
import styles from '../Account/Account.module.css'

function Account() {
  return (
    <div>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
            <h3 className={styles.sidebarH3}>Manage My Account</h3>
          <ul className={styles.sidebarUl}>
            <li className={styles.sidebarLi} >My Profile</li>
            <li className={styles.sidebarLi}>Address Book</li>
            <li className={styles.sidebarLi}>My Payment Options</li>
        </ul>
            <h3 className={styles.sidebarH3}>My Orders</h3>
            <ul className={styles.sidebarUl}>
            <li className={styles.sidebarLi}>My Returns</li>
            <li className={styles.sidebarLi}>My Cancellations</li>
       </ul>
       <h3 className={styles.sidebarH3}>My WishList</h3>
        </aside>
        <div className={styles.Edit}>
          <h2 className={styles.editH2}>Edit Your Profile</h2>
          <div className={styles.Account}>
            <div className={styles.item}>
            <div className={styles.AccountGroup}>
              <label className={styles.itemLabel}  htmlFor="firstName">First Name</label>
              <input className={styles.itemInput} type="text" id="firstName" name="firstName" defaultValue="Md" />
            </div>
            <div className={styles.AccountGroup}>
              <label  className={styles.itemLabel} htmlFor="lastName">Last Name</label>
              <input className={styles.itemInput} type="text" id="lastName" name="lastName" defaultValue="Rimel" />
            </div>
            </div>
            <div className={styles.item}>
            <div className={styles.AccountGroup}>
              <label  className={styles.itemLabel} htmlFor="email">Email</label>
              <input className={styles.itemInput} type="email" id="email" name="email" defaultValue="rimel111@gmail.com" />
            </div>
            <div className={styles.AccountGroup}>
              <label  className={styles.itemLabel} htmlFor="address">Address</label>
              <input className={styles.itemInput} type="text" id="address" name="address" defaultValue="Kingston, 5236, United State" />
            </div>
            </div>
            <h3>Password Changes</h3>
            <div className={styles.pass}>
            <div className={styles.AccountGroup}>
              <input className={styles.passInput} type="password" id="currentPassword" name="currentPassword" defaultValue="Current Passwod" />
            </div>
            <div className={styles.AccountGroup}>
              <input className={styles.passInput} type="password" id="newPassword" name="newPassword" defaultValue="New Passwod" />
            </div>
            <div className={styles.AccountGroup}>
              <input className={styles.passInput} type="password" id="confirmPassword" name="confirmPassword" defaultValue="Confirm New Passwod" />
            </div>
            <div className={styles.btn}>
            <div className={styles.cancel}>
              <button className={styles.cancelBtn} type="button" >Cancel</button>
              </div>
            <div className={styles.buttons}>
             <button  className={styles.submitBtn} type="submit" >Save Changes</button>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Account