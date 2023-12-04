import { fs } from 'zx'

// Get version number from package.json
const { version } = await fs.readJSON('package.json')

// Files to update
const files = ['composer.json']
for (const file of files) {
   const content = await fs.readJSON(file)
   if (content.version !== version) {
      content.version = version
      // Write back to file with updated version
      await fs.writeJSON(file, content, { spaces: 2 })
      console.log('Updated version in', file)
   }
}
