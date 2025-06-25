import mongoose from 'mongoose'

import app from './app'
// import config from './app/config'
import { SuperAdmin } from './app/modules/auth/auth.model'

// import seedSuperAdmin from './app/DB';

async function createSuperAdmin() {
  // const username = config.super_admin_email
  // const password = config.super_admin_password
  const username = 'codexaa123'
  const password = 'codexaa123'
  if (!username || !password) {
    console.warn(
      'Super admin credentials are not set in environment variables.'
    )
    return
  }
  const exists = await SuperAdmin.findOne({ username })
  if (!exists) {
    await SuperAdmin.create({ username, password })
    console.log('Super admin created.')
  } else {
    console.log('Super admin already exists.')
  }
}

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://snapyeah456:snapyeah456@cluster0.gs6rung.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

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
