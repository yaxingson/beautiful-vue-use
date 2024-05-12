function useCookie(cookieName:string) {
  
  const updateCookie = ()=>{}
  const deleteCookie = ()=>{}

  return [ updateCookie, deleteCookie ] as const
}

export default useCookie
