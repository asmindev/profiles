import React from 'react'

export default function Footer() {
  return (
    <div className="w-full bg-slate-900/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="py-6 text-white text-center text-sm font-popins flex items-center">
            © 2020 - {new Date().getFullYear()} -
            <a
              href="https://instagram.com/iniasmin_"
              className="text-yellow-600 mx-1"
            >
              Asmin
            </a>
            with
            <span className="flex items-center text-red-600 mx-1">
              <ion-icon name="heart" />
            </span>
            and
            <span className="flex items-center mx-1">
              <ion-icon name="cafe" />
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}
