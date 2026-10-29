export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Abenezer Taye. All rights reserved.</p>
          <p className="mt-2">Vanderbilt University • Institute for Software Integrated Systems</p>
        </div>
      </div>
    </footer>
  );
}
