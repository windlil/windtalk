class MyStorage {
  private storage = localStorage
  constructor(type: 'sessionStorage' | 'localStorage') {
    if (type === 'sessionStorage') {
      this.storage = sessionStorage
    } else {
      this.storage = localStorage
    }
  }

  get(key: string) {
    const JSONData = this.storage.getItem(key)
    if (JSONData) {
      return JSON.parse(JSONData)
    } else {
      return undefined
    }
  }

  set(key: string, value: any) {
    this.storage.setItem(key, value)
  }

  remove(key: string) {
    const data = this.get(key)
    if (data)
      this.storage.removeItem(key)
  }
}

const useStorage = new MyStorage('localStorage')

export default useStorage
