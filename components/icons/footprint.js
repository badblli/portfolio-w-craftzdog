const FootprintIcon = props => {
  return (
    <svg
      width={20}
      height={20}
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M7 0V2.27734C6.60331 2.50796 6.29371 2.86565 6.13086 3.30078C3.73469 4.08797 2 6.34285 2 9V9.56055C0.812472 10.2568 0 11.5334 0 13C0 14.4666 0.812472 15.7432 2 16.4395V22H4V21C4 19.9 4.9 19 6 19H10C11.1 19 12 19.9 12 21V22H14V16.4395C15.1875 15.7432 16 14.4666 16 13C16 11.5334 15.1875 10.2568 14 9.56055V9C14 6.34285 12.2653 4.08797 9.86914 3.30078C9.70629 2.86565 9.39669 2.50796 9 2.27734V0H7ZM4 11H12C13.1167 11 14 11.8833 14 13C14 14.1167 13.1167 15 12 15H4C2.88333 15 2 14.1167 2 13C2 11.8833 2.88333 11 4 11ZM4 12V14H6V12H4ZM10 12V14H12V12H10Z" />
    </svg>
  )
}

export default FootprintIcon