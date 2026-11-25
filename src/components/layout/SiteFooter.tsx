export default function SiteFooter() {
  const updated = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  return <footer className="site-footer">Last updated {updated}</footer>;
}
