
export default function Hero() {
  return (
    <section className="bg-background flex flex-col p-7 w-screen">
      <h2>Explore our features</h2>
      <div>
        <h1>Here will be the carousel</h1>
      </div>
      <div className="grid grid-cols-4 gap-10 p-5">
        <div className="bg-light_background p-5 rounded-2xl">
          <svg className="p-3 bg-accent w-1/6 md:w-1/10 rounded-2xl stroke-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.06152 12C5.55362 8.05369 8.92001 5 12.9996 5C17.4179 5 20.9996 8.58172 20.9996 13C20.9996 17.4183 17.4179 21 12.9996 21H8M13 13V9M11 3H15M3 15H8M5 18H10" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <p className="mt-5 text-foreground text-2xl font-semibold">Generate right responses<br /> to your prompts</p>
        </div>
        <div className="bg-light_background p-5 rounded-2xl">
          <svg className="p-3 bg-accent w-1/6 md:w-1/10 rounded-2xl stroke-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 8H8.01M8 12H8.01M16 12H16.01M16 8H16.01M16 16H16.01M8 16H8.01M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <p className="mt-5 text-foreground text-2xl font-semibold">Automate the<br /> boring tasks</p>
        </div>
        <div className="bg-light_background p-5 rounded-2xl">
          <svg className="p-3 bg-accent w-1/6 md:w-1/10 rounded-2xl stroke-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V3M7 15L12 9L16 13L21 7" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <p className="mt-5 text-foreground text-2xl font-semibold">Appeal to your audience<br /> without even trying</p>
        </div>
        <div className="bg-light_background p-5 rounded-2xl">
          <svg className="p-3 bg-accent w-1/6 md:w-1/10 rounded-2xl stroke-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <p className="mt-5 text-foreground text-2xl font-semibold">Analysis of your tweets<br /> and corrections</p>
        </div>
      </div>
    </section>
  )
}
