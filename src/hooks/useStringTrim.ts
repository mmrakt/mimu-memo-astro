const useStringTrim = (str: string, limit: number) =>
  str.length > limit ? `${str.substring(0, limit)}...` : str

export default useStringTrim
