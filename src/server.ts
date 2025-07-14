import mongoose from 'mongoose'

import app from './app'
// import config from './app/config'

import config from './app/config'
import { Users } from './app/modules/users/user.model'
import { userRole } from './app/constant/userRole'
import hashPassword from './app/utils/hashPassword'

// import seedSuperAdmin from './app/DB';

async function createSuperAdmin() {
  // const username = config.super_admin_email
  // const password = config.super_admin_password
  const username = process.env.SUPER_ADMIN_USERNAME
  const password = process.env.SUPER_ADMIN_PASSWORD
  const hashedPassword = hashPassword(password!)
  if (!username || !password) {
    console.warn(
      'Super admin credentials are not set in environment variables.'
    )
    return
  }
  const exists = await Users.findOne({ username })
  if (!exists) {
    await Users.create({
      username,
      password: hashedPassword,
      role: userRole.SUPER_ADMIN,
      status: 'active',
      email: 'codexaa@gmail.com'
    })
    console.log('Super admin created.')
  } else {
    console.log('Super admin already exists.')
  }
}

async function main() {
  try {
    await mongoose.connect(config.database_url_live!)

    // seedSuperAdmin();
    await createSuperAdmin()
    app.listen(5000, () => {
      console.log('Database connected!')
      console.log(`app is listening on port ${5000}`)
    })
  } catch (err) {
    console.log(err)
  }
}

main()
