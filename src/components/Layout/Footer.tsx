export default function Footer() {
    return (
    <footer className="sticky bottom-0 footer footer-center text-base-content border-t-2 p-4 bg-background">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights & donuts are reserved by <a className="underline hover:no-underline" href="https://saral.me">me</a>.</p>
        </aside>
    </footer>
    )
}