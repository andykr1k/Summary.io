import * as React from 'react'
import { ThemeToggle } from '../components'

export default function Navbar() {
  return (
    <nav
    aria-label="Global"
    className="mx-auto flex items-center justify-between p-4"
    >
    <a
        href="/"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-transparent/25"
    >
        <span className="sr-only">Logo</span>
        📄
    </a>

    <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
            <a className="rounded-lg px-3 py-2" href="/"> Home </a>
        </li>

        <li>
            <a className="rounded-lg px-3 py-2" href="/about"> About </a>
        </li>
        <li>
            <ThemeToggle/>
        </li>
    </ul>
    </nav>
  )
}