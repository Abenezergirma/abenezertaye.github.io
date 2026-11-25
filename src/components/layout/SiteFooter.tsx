import { execSync } from 'node:child_process';
import { profile } from '@/lib/data';

/** Date of the latest commit, read when the site is built. */
function lastModified() {
  let date = new Date();
  try {
    const iso = execSync('git log -1 --format=%cs', { encoding: 'utf8' }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(iso)) date = new Date(`${iso}T12:00:00Z`);
  } catch {
    // Not a git checkout: fall back to the build date.
  }
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      © {profile.name}. Last modified: {lastModified()}. Built with <a href="https://nextjs.org">Next.js</a>.
    </footer>
  );
}
