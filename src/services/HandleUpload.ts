import { createHash } from 'crypto'
export const handleUploadFile = async (file: File) => {
  const reader = new FileReader()
  // Create a Promise to handle the file reading operation
  const readFile = (file: File) => {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      reader.readAsArrayBuffer(file)
      reader.onload = () => {
        if (reader.result instanceof ArrayBuffer) {
          resolve(reader.result)
        } else {
          reject(new Error('Failed to read file as ArrayBuffer'))
        }
      }
      reader.onerror = reject
    })
  }

  try {
    const fileData = await readFile(file)
    const hash = createHash('md5')
    hash.update(Buffer.from(fileData))
    const md5Hash = encodeURIComponent(hash.digest('base64'))
    return md5Hash
  } catch (error) {
    console.error('Error reading file:', error)
  }
}
