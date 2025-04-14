export default function Footer() {
    var year = new Date().getFullYear();
    return (
        <footer className="text-white p-4">
            <div className="container mx-auto">
                <hr className="text-[#009b5f] p-1" />
                <p className="text-center text-gray-400 text-sm">
                  © {year} Thomas De Clerck. All rights reserved.
                </p>
            </div>
        </footer>
    );
}