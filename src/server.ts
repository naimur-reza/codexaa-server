import mongoose from 'mongoose'

import app from './app'
import config from './app/config'

// import seedSuperAdmin from './app/DB';

async function main() {
  try {
    await mongoose.connect("mongodb+srv://sharemyshareda:TKQkukp3a5aBVTH7@cluster0.ggaf8mv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    // seedSuperAdmin();
    app.listen(5000, () => {
      console.log('Database connected!')
      console.log(`app is listening on port ${5000}`)
    })
  } catch (err) {
    console.log(err)
  }
}

main()
